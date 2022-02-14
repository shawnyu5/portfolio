# Ahmadz.ai

<p align="center">
  <a href="http://www.ahmadz.ai"><img src="https://img.shields.io/badge/Live-Demo-blueviolet?style=flat-square"></a>
</p>

**Simple portfolio template built with React.**

All data is served locally via json files from `public/data` folder and rendered on the website (After building the app, the data folder can be found in the root directory.).

Rename the `sample.env` file to `.env` and fill the following if you want the contact section to function properly.

```
REACT_APP_EMAILJS_SERVICE_ID //Your emailJs Service ID
REACT_APP_TEMPLATE_ID  //Your emailJs template ID
REACT_APP_USER_ID //Your emailJs user ID
```

## Adding Projects On-Site via Github OAuth

Create a new Github App in https://github.com/settings/apps
Set the following:

-  GitHub App name (The name of your website, I set mine to `Ahmadzai's Portfolio`)
-  Homepage URL (The address of your website, I set mine to `https://ahmadz.ai`)
-  Callback URL (Set this to `homepageURL + /php/github.php`, I set mine to `https://ahmadz.ai/php/github.php`)

Rename the `public/auth/variables.sample` file to `variables.php` and fill with your github oauth variables (You can get your github ID from https://api.github.com/users/your_username).

## Screenshots

![Screenshot](https://i.imgur.com/Ejy5dJx.png)
![Screenshot2](https://i.imgur.com/dTPRTJr.png)
