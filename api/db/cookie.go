package db

import (
	"database/sql"
	"github.com/132yse/acgzone-server/api/def"
)

func ReplaceCookie(uid int, hcy string, tyyp string, bit string) (*def.Cookie, error) {
	stmtIns, err := dbConn.Prepare("REPLACE INTO cookies (uid,hcy,tyyp,bit) VALUES (?,?,?,?)")
	if err != nil {
		return nil, err
	}
	_, err = stmtIns.Exec(uid, hcy, tyyp, bit)
	if err != nil {
		return nil, err
	}
	defer stmtIns.Close()

	res := &def.Cookie{Uid: uid, Hcy: hcy, Tyyp: tyyp, Bit: bit}
	defer stmtIns.Close()
	return res, err
}

func GetCookie(uid int) (*def.Cookie, error) {
	stmtOut, err := dbConn.Prepare("SELECT uid,hcy,tyyp,bit FROM cookies WHERE uid = ?")
	if err != nil {
		return nil, err
	}

	var hcy, tyyp, bit string
	err = stmtOut.QueryRow(uid).Scan(&uid, &hcy, &tyyp, &bit)
	if err != nil && err != sql.ErrNoRows {
		return nil, err
	}
	if err == sql.ErrNoRows {
		return nil, nil
	}
	res := &def.Cookie{Uid: uid, Hcy: hcy, Tyyp: tyyp, Bit: bit}

	defer stmtOut.Close()

	return res, nil
}
