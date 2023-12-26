import {test , expect} from '@playwright/test'

test(" login with valid user and add valid item " , async({page}) => {

     // Navigate to the login page
    await page.goto("https://qacart-todo.herokuapp.com/todo");

     // Perform login actions
    await page.locator('[data-testid="email"]').fill("nirasamy@gmail.com");
    await page.locator('[data-testid="password"]').fill("P@ssw0rd");
    await page.locator('[data-testid="submit"]').click();


    // Priority 2: Add New Item
    await page.locator('[data-testid="add"]').click();

    await page.locator('[data-testid="new-todo"]').fill("first todo item");

    await page.locator('[data-testid="submit-newTask"]').click();

})


// test("2- Click on add note " , async({page}) => {
//     await page.locator('[data-testid="add"]').click();

// })

// test("3- fill data in todo item " , async({page}) => {
//     await page.locator('[data-testid="new-todo"]').fill("first todo item");

// })
