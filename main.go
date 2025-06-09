package main

import (
	"embed"
	"log"
	"net/http"
	"sort"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

type User struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
}

var users = []User{
	{ID: 1, Name: "John Doe"},
	{ID: 2, Name: "Jane Smith"},
	{ID: 3, Name: "Alice Johnson"},
	{ID: 4, Name: "Bob Brown"},
	{ID: 5, Name: "Charlie Davis"},
	{ID: 6, Name: "Diana White"},
	{ID: 7, Name: "Ethan Green"},
	{ID: 8, Name: "Fiona Black"},
	{ID: 9, Name: "George Gray"},
	{ID: 10, Name: "Hannah Blue"},
	{ID: 11, Name: "Isaac Red"},
	{ID: 12, Name: "Julia Purple"},
	{ID: 13, Name: "Kevin Orange"},
	{ID: 14, Name: "Liam Yellow"},
	{ID: 15, Name: "Mia Pink"},
	{ID: 16, Name: "Noah Gray"},
	{ID: 17, Name: "Olivia Brown"},
	{ID: 18, Name: "Patrick Green"},
	{ID: 19, Name: "Quentin Black"},
	{ID: 20, Name: "Raphael Gray"},
	{ID: 21, Name: "Samuel Brown"},
	{ID: 22, Name: "Thomas Green"},
	{ID: 23, Name: "Ursula Black"},
	{ID: 24, Name: "Vincent Gray"},
	{ID: 25, Name: "William Brown"},
	{ID: 26, Name: "Xavier Green"},
	{ID: 27, Name: "Yasmine Black"},
	{ID: 28, Name: "Zachary Gray"},
	{ID: 29, Name: "Ava Brown"},
	{ID: 30, Name: "Benjamin Green"},
	{ID: 31, Name: "Chloe Black"},
	{ID: 32, Name: "Daniel Green"},
	{ID: 33, Name: "Emma Black"},
	{ID: 34, Name: "Finn Gray"},
	{ID: 35, Name: "Grace Brown"},
	{ID: 36, Name: "Henry Green"},
	{ID: 37, Name: "Isabella Black"},
}

//go:embed all:build/client
var build embed.FS

func main() {

	sort.SliceStable(users, func(i, j int) bool {
		return users[i].Name < users[j].Name
	})

	e := echo.New()

	e.StaticFS("/", echo.MustSubFS(build, "build/client"))
	e.Pre(middleware.Rewrite(map[string]string{
		"/admin": "/",
		"/about": "/",
	}))
	e.Use(middleware.Recover())
	e.Use(middleware.Logger())
	e.Use(middleware.BasicAuthWithConfig(
		middleware.BasicAuthConfig{
			Validator: func(username, password string, c echo.Context) (bool, error) {
				if username == "admin" && password == "admin" {
					return true, nil
				}
				return false, nil
			},
			Realm: "Restricted",
		},
	))
	// Démarrer le serveur

	e.GET("/api/users", func(c echo.Context) error {
		return c.JSON(http.StatusOK, users)
	})

	if err := e.Start(":8080"); err != nil {
		log.Fatal(err)
	}
}
