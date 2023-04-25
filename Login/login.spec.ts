import { test, expect } from "@playwright/test";

let user1: string = "standard_user"
let user2: string = "locked_out_user"
let user3: string = "problem_user"
let user4: string = "performance_glitch_user"
let user5: string = "usuario_user"
let key1: string = "secret_sauce"
let key2: string = "abc123"

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
})

test('Caso de teste 1', async ({ page }) => {
    await page.locator('(//div//div//div//div//div//div//form//div//input)[1]').fill(user1);
    await page.locator('(//div//div//div//div//div//div//form//div//input)[2]').fill(key1);
    await page.locator("//input[@class='submit-button btn_action']").click();
    await page.waitForTimeout(5000);
    await expect(page.getByText('Products')).toBeVisible();
});

test('Caso de teste 2', async ({ page }) => {
    await page.locator('(//div//div//div//div//div//div//form//div//input)[1]').fill(user2);
    await page.locator('(//div//div//div//div//div//div//form//div//input)[2]').fill(key1);
    await page.locator("//input[@class='submit-button btn_action']").click();
    await page.waitForTimeout(5000);
    await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible();
});

test('Caso de teste 3', async ({ page }) => {
    await page.locator('(//div//div//div//div//div//div//form//div//input)[1]').fill(user3);
    await page.locator('(//div//div//div//div//div//div//form//div//input)[2]').fill(key1);
    await page.locator("//input[@class='submit-button btn_action']").click();
    await page.waitForTimeout(5000);
    await expect(page.getByText('Products')).toBeVisible();
});

test('Caso de teste 4', async ({ page }) => {
    await page.locator('(//div//div//div//div//div//div//form//div//input)[1]').fill(user4);
    await page.locator('(//div//div//div//div//div//div//form//div//input)[2]').fill(key1);
    await page.locator("//input[@class='submit-button btn_action']").click();
    await page.waitForTimeout(10000);
    await expect(page.getByText('Products')).toBeVisible();
});

test('Caso de teste 5', async ({ page }) => {
    await page.locator("//input[@class='submit-button btn_action']").click();
    await page.waitForTimeout(5000);
    await expect(page.getByText('Epic sadface: Username is required')).toBeVisible();
});

test('Caso de teste 6', async ({ page }) => {
    await page.locator('(//div//div//div//div//div//div//form//div//input)[1]').fill(user1);
    await page.locator("//input[@class='submit-button btn_action']").click();
    await page.waitForTimeout(5000);
    await expect(page.getByText('Epic sadface: Password is required')).toBeVisible();
});

test('Caso de teste 7', async ({ page }) => {
    await page.locator('(//div//div//div//div//div//div//form//div//input)[1]').fill(user2);
    await page.locator("//input[@class='submit-button btn_action']").click();
    await page.waitForTimeout(5000);
    await expect(page.getByText('Epic sadface: Password is required')).toBeVisible();
});

test('Caso de teste 8', async ({ page }) => {
    await page.locator('(//div//div//div//div//div//div//form//div//input)[1]').fill(user3);
    await page.locator("//input[@class='submit-button btn_action']").click();
    await page.waitForTimeout(5000);
    await expect(page.getByText('Epic sadface: Password is required')).toBeVisible();
});

test('Caso de teste 9', async ({ page }) => {
    await page.locator('(//div//div//div//div//div//div//form//div//input)[1]').fill(user4);
    await page.locator("//input[@class='submit-button btn_action']").click();
    await page.waitForTimeout(10000);
    await expect(page.getByText('Epic sadface: Password is required')).toBeVisible();
});

test('Caso de teste 10', async ({ page }) => {
    await page.locator('(//div//div//div//div//div//div//form//div//input)[1]').fill(user1);
    await page.locator('(//div//div//div//div//div//div//form//div//input)[2]').fill(key1);
    await page.locator("//input[@class='submit-button btn_action']").press('Enter');
    await page.waitForTimeout(5000);
    await expect(page.getByText('Products')).toBeVisible();
});

test('Caso de teste 11', async ({ page }) => {
    await page.locator('(//div//div//div//div//div//div//form//div//input)[1]').fill(user2);
    await page.locator('(//div//div//div//div//div//div//form//div//input)[2]').fill(key1);
    await page.locator("//input[@class='submit-button btn_action']").press('Enter');
    await page.waitForTimeout(5000);
    await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible();
});

test('Caso de teste 12', async ({ page }) => {
    await page.locator('(//div//div//div//div//div//div//form//div//input)[1]').fill(user3);
    await page.locator('(//div//div//div//div//div//div//form//div//input)[2]').fill(key1);
    await page.locator("//input[@class='submit-button btn_action']").press('Enter');
    await page.waitForTimeout(5000);
    await expect(page.getByText('Products')).toBeVisible();
});

test('Caso de teste 13', async ({ page }) => {
    await page.locator('(//div//div//div//div//div//div//form//div//input)[1]').fill(user4);
    await page.locator('(//div//div//div//div//div//div//form//div//input)[2]').fill(key1);
    await page.locator("//input[@class='submit-button btn_action']").press('Enter');
    await page.waitForTimeout(10000);
    await expect(page.getByText('Products')).toBeVisible();
});

test('Caso de teste 14', async ({ page }) => {
    await page.locator('(//div//div//div//div//div//div//form//div//input)[1]').fill(user1);
    await page.locator('(//div//div//div//div//div//div//form//div//input)[2]').fill(key2);
    await page.locator("//input[@class='submit-button btn_action']").click();
    await page.waitForTimeout(5000);
    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
});

test('Caso de teste 15', async ({ page }) => {
    await page.locator('(//div//div//div//div//div//div//form//div//input)[1]').fill(user2);
    await page.locator('(//div//div//div//div//div//div//form//div//input)[2]').fill(key2);
    await page.locator("//input[@class='submit-button btn_action']").click();
    await page.waitForTimeout(5000);
    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
});