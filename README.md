# BFSDF Backend API

back for the project. 

name : bfsdfbackendwebapi

# how to run

```
    npm install
    nodemon index.js
```

note: you will have to install nodemon globally. 

# things to remember

1. we are not actually using the mongo db things. 
1. endpoint 1, http://localhost:4000/hellojson
1. endpoint 2, http://localhost:4000/hello

# API EndPoints : hellojson GET

```
    {host}/hellojson
```

for example, if host is 'bfsdfbackendapril4th2023.vercel.app'
```
https://bfsdfbackendapril4th2023.vercel.app/hellojson
```
response would be
```
{
    "message": "Hello World",
    "name": "Monkey",
    "age": 20
}
```

# API EndPoints : returnestimate POST

(with some deployed host)

```
https://bfsdfbackendapril4th2023-jay-study-nildana.vercel.app/returnestimate
```
include the body for POST
```
{
    "test" : "test info",
    "everyweektutor" : "8",
    "everyweekpractice" : "24"
}
```
response would be
```
{
    "totalmonths": 3,
    "totalweeks": 11.875,
    "totaleachweek": 32,
    "everyweekpractice": 24,
    "everyweektutor": 8,
    "courseObjects": {
        "standardcourseduration": 80,
        "standardcoursedurationwithpractice": 240,
        "preparationhours": 10,
        "javascripthours": 40,
        "cloudandothers": 10,
        "totalhours": 380
    },
    "simplesummarysentence": "It will take 3 months to complete the course with 24 hours of practice and 8 hours of tutoring each week"
}
```
# Hire Me

I work as a full time freelance coding tutor. Hire me at [UpWork](https://www.upwork.com/fl/vijayasimhabr) or [Fiverr](https://www.fiverr.com/jay_codeguy). 

# Hobbies

I try to maintain a few hobbies.

1. Podcasting. You can listen to my daily life [podcast](https://stories.thechalakas.com/listen-to-podcast/).
1. Podcasting. You can listen to my movies [podcast](https://sandkdesignstudio.in/jays-movie-podcast/).
1. Photography Nature. You can see my photography on [Unsplash](https://unsplash.com/@jay_neeruhaaku).
1. Photography Fashion. You can see my fashion photography on [Behance](https://www.behance.net/vijayasimhabr)
1. Digital Photorealism 3D Art. You can see my work on [ArtStation](https://www.artstation.com/jay_kalenildana).
1. Daily Life Blog. [Read it here](https://medium.com/the-sanguine-tech-trainer).
1. Coding and Technology Blog. [Read it here](https://medium.com/projectwt).
1.  Daz 3D, Photography and Photoshop Blog. [Read it here](https://medium.com/random-pink-hula).

# important note 

This code is provided as is without any warranties. It's primarily meant for my own personal use, and to make it easy for me share code with my students. Feel free to use this code as it pleases you.

1. Jay's [Developer Profile](https://jay-study-nildana.github.io/developerprofile)
1. Jay's [Personal Site](https://stories.thechalakas.com/)
