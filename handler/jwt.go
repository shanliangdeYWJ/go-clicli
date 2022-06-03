package handler

import (
	"errors"
	"time"

	jwt "github.com/golang-jwt/jwt/v4"
)

var Key = []byte("clicli")

type MyClaims struct {
	Name  string `json:"name"`
	Pwd   string `json:"pwd"`
	Level int    `json:"level"`
	jwt.StandardClaims
}

func GenToken(name string, pwd string, level int) (string, error) {
	c := MyClaims{
		name,
		pwd,
		level,
		jwt.StandardClaims{
			ExpiresAt: time.Now().Add(time.Hour * 5).Unix(),
			Issuer:    "yisar",
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, c)
	return token.SignedString(Key)
}


func ParseToken(str string) (*MyClaims, error){
	token, err := jwt.ParseWithClaims(str, &MyClaims{}, func(t *jwt.Token) (interface{}, error) {
		return Key, nil
	})

	if err != nil {
		return nil, err
	}

	if claims, ok := token.Claims.(*MyClaims); ok && token.Valid{
		return claims, nil
	}
	return nil, errors.New("invalid token")
}