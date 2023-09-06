# AJAX-lecture
LightHouse Labs web-flex lecture  on AJAX
[Repo](https://github.com/ermurray/AJAX-lecture/tree/july10-w9) | [Video](https://vimeo.com/861484797/89b17c3cff?share=copy)

## Topics
- [ ] SPA vrs SSR
- [ ] JSON, XML...
- [ ] what is AJAX
- [ ] how do we use it


## AJAX
- Asynchronous Javascript And XML
- Invented by Microsoft for Outlook Web Access as a way of replicating desktop application functionality in the browser
- web applications can send and recieve data asynchronously without a browser refresh
- AJAX was one of the main factors that led to web 2.0
- Originally retrieved data sent using 'XML', but modern apps using 'JSON' instead
```javaScript
$.ajax({
  url: "https://jsonplaceholder.typicode.com/posts",
  method: "GET",
  dataType: "json",
  success: (data) => {
    console.log("this request succeeded and here's the data", data);
  },
  error: (error) => {
    console.log("this request failed and this was the error", error);
  },
});
```

## XMLHttpRequest Object
- Ajax is implemented using the XHR object
- Modern libraries (such as jQuery or axios) provide us with easy-to-use wrappers for the XHR object

## Pros/cons of SPA
- pros
  - responsive design
  - interactive
  - one location
- cons
  - long initial
  - loose history
  - 

## jquery short hand
```javaScript
// make a get request to the specified endpoint
$.get("https://jsonplaceholder.typicode.com/posts");

// make a get request for JSON data
$.getJSON("https://jsonplaceholder.typicode.com/posts");

// make a post request
$.post("https://jsonplaceholder.typicode.com/posts", {
  /* form data */
});
```
### Questions
- reading resources
  - Clean Code by Robert C. martin
  - Cracking the Coding invterview
- video resources
  - @chromeDevs ...Some interesting chats around browser capabilities