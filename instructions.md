# WDI Resident Code Challenge

For the code challenge, you will be building a simple web page that will allow the user to load a `.json` file that follows a certain syntax but is arbitrarily nested. When that file is loaded, you will generate HTML based on the nested structure and display that HTML on the page.

For an example, visit [the solution site](http://bwreid.github.io/wdi-resident-code-challenge).

To learn how to read a file locally, this article is a great start: [HTML5rocks](https://www.html5rocks.com/en/tutorials/file/dndfiles/)

### Goals

1. Get as far as you can with the tasks above
1. Separate and clean your code so it's readable and presentable
1. Make multiple, clear commits to demonstrate your knowledge of git
1. _Do not_ worry about designing the site in any particular format
1. Deploy your static site and email me the URL

_Note:_ You may use whatever resources you want to solve the problem besides your instructors! We want you to craft together a solution as best you can. 😀

### Tips

1. Remember Polya's Problem Solving Technique -- feel free to ask for clarification on edge cases and make sure to break apart the problem!
1. The above article on reading files locally has some good examples to get started but you'll likely need to read through the full article to get to the right answer
1. When parsing the JSON, notice that each object has the exact same structure which means you'll likely want to find a recursive solution and/or use a `while` loop

### Sample JSON

The following files should all work with your website. Copy each code block into a separate file and then load it into the example website to see what might be rendered.

```json
[
  {
    "tag": "section",
    "content": {
      "tag": "p",
      "content": "Hello world!"
    }
  }
]
```

```json
[
  {
    "tag": "section",
    "content": {
      "tag": "h2",
      "content": "This file is a bit more complicated because:"
    }
  },
  {
    "tag": "section",
    "content": {
      "tag": "ol",
      "content": [
        {
          "tag": "li",
          "content": "There are multiple levels of nesting."
        },
        {
          "tag": "li",
          "content": "Some keys are at the same level."
        },
        {
          "tag": "li",
          "content": "The data types are mixed!"
        }
      ]
    }
  }
]
```

```json
[
  {
    "tag": "section",
    "content": {
      "tag": "h2",
      "content": "Welcome to My Page!"
    }
  },
  {
    "tag": "section",
    "content": [
      {
        "tag": "h3",
        "content": "My Favorite Things"
      },
      {
        "tag": "ul",
        "content": [
          {
            "tag": "li",
            "content": "<img src='http://placekitten.com/g/200/200'/>"
          },
          {
            "tag": "li",
            "content": "<img src='http://placekitten.com/g/201/200'/>"
          },
          {
            "tag": "li",
            "content": "<img src='http://placekitten.com/g/200/201'/>"
          }
        ]
      },
      {
        "tag": "p",
        "content": [
          {
            "tag": "span",
            "content": "In short, I "
          },
          {
            "tag": "strong",
            "content": "just love"
          },
          {
            "tag": "span",
            "content": " kittens!"
          }
        ]
      }
    ]
  }
]
```
