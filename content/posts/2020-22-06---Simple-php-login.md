---
title: Simple Backend Login in Core PHP
date: "2020-06-22"
template: "post"
draft: false
slug: "simple-backend-login-core-php"
category: "Personal"
tags:
  - "PHP"
  - "Web Development"
  - "Coding"
description: "Today I want to tell you my experience using these two operating systems, from the point of view of a developer but also of a normal user, because I use the PC both at work and at home, both to program and to reply to emails, write documents, mark appointments etc..."
socialImage: "/media/42-line-bible.jpg"
---

Today there are tons of CMS and frameworks around, beautiful and ready to go, you just need to install it and _voilà_, the game is done!

Everyone has a login system to access a reserved area!

But I have always been one of those who are not satisfied with ready meals, I want to learn how to cook! 🍳🥘😂

For this reason I decided to create [my own CMS](https://orangecms.altervista.org/), starting from scratch and using only HTML, CSS, JS and PHP.

Find out more about this project by clicking here: [https://orangecms.altervista.org/](https://orangecms.altervista.org/)

One of the first things I had to do with my CMS was a login system to access the reserved area.

## PHP core login system
I have now decided to develop a small access system to a restricted area open source.

You can find the source code of this project on my github profile at this address: [https://github.com/alby721/Simple-login-and-registration-in-php](https://github.com/alby721/Simple-login-and-registration-in-php)

Let's leave out routing systems and software architecture and make it simple! let's just talk about the bare and raw login.

## Reserved area
First of all, I created a "login" folder, inside which there will be the files of the reserved area.

If I am not yet logged in then I will see the login form.
![PHP login form](https://www.albertoreineri.it/wp-content/uploads/2020/04/image.png "PHP login form")

In _index.php_ file in the login folder, I entered the form to effectively access the reserved area, wich refers to the access.php file, containing the access data control functions.

```
 <!-- Login form -->
      <form class="" action="access.php" method="POST">
        <!-- Action -->
        <input type="hidden" name="action" value="login">
        <!-- Email or Username -->
        <label for="email">Email or Username</label>
        <input autofocus name="email" type="text">
        <!-- Password -->
        <label for="password">Password</label>
        <input name="password" id="password" placeholder="" type="password">
        <!-- Login Button -->
        <button type="submit">Login</button>
      </form>
      <!-- /Login form -->

```

_Access.php_ takes care of both the login and registration of new users. It is a file that keeps only PHP, performs the checks and then refers to the correct page, based on the type of request.

If I entered the correct data then send back to the backend.

If I have made a mistake in the access data, it sends me back to the login form with an error message.

If I am creating a new user, it follows the registration procedure, sending a confirmation email with a link by clicking on which you will confirm your account.

![PHP login form registration](https://www.albertoreineri.it/wp-content/uploads/2020/04/image-1.png "PHP login form registration")

<br> 

___access.php___

```
<?php
//Config File
include("config.php");

//Control Action
if ($_POST['action'] == "login") {
    /*------------------------------------------------------
                        LOGIN
    -------------------------------------------------------*/
    ///$_Post variables
    $email = $_POST['email'];
    $password = $_POST['password'];


    //Query
    $sql = "SELECT * FROM users WHERE email = '" . $email . "' OR username ='" . $email . "'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {

            //Password control
            if (!(password_verify($password, $row["password"]))) {
                header("location: error.php?error=Wrong Password");
                die();
            }

            //Start Session
            session_start();

            //Save user id in session
            $_SESSION['id'] = $row["id"];

            //Redirect to backend homepage
            header("location: welcome.php");
            die();
        }
    } else {
        header("location: error.php?error=Wrong Email or Username");
        die();
    }
} elseif ($_POST['action'] == "register") {
     /*------------------------------------------------------
                        REGISTER
    -------------------------------------------------------*/
    $email = $_POST['email'];
    $username = $_POST['username'];
    $password = $_POST['password'];

    //Control if the user or email are already in the database
    $sql = "SELECT * FROM users WHERE email = '" . $email . "' OR username = '" . $username . "'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            header("location: error.php?error=Email or Username already register!");
        }
    }


    //Insert new user in DB
    $password = password_hash($password, PASSWORD_DEFAULT);
    $sql = "INSERT INTO users (username,email,password) 
    VALUES (
    '" . $username . "', 
    '" . $email . "', 
    '" . $password . "'
    )";
    if ($conn->query($sql) === TRUE) {       
        header("location: index.php");
    } else {
        header("location: error.php?error=" . $conn->error);
    }
}
$conn->close();
```


## Database
The database is very simple, with a "users" table containing the user data and the encrypted password.

![PHP login form database](https://www.albertoreineri.it/wp-content/uploads/2020/04/image-3.png "PHP login form database")

To block non-logged-in users and allow access only to logged-in users, you can use the session variables, to be included in each file of the backend. In this way, access is allowed only to those who have passed through the login form. This step is not present on github but it is very simple to integrate, maybe I will add it when I have some time!

__I hope it could have been useful and interesting.__

If you want to use this form or try it and improve it, follow the instructions in the readme.txt file on github.

___Thanks for reading and good code!___