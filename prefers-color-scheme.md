# How to prefers-color-scheme

## step 1: color root variables -->

### 1: set primary variables

### 2: //?

## Step 2: set colors of elements -->

### 1: dark base

### 2: add (

    ```scss
    @media (prefers-color-scheme: dark) {}
    
    ```
)

### 3: change the values of color vars to the dark?

## step 2 : JS

### i dont know --> so learn

    ```js
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        if (darkThemeMq.matches) {
            // Theme set to dark.
        } else {
            // Theme set to light.
        }
    ```
