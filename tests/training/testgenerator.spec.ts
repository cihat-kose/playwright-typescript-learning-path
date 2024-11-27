// https://playwright.dev/docs/codegen
// TODO:
// - [ ] Watch the video on https://playwright.dev/docs/codegen
// - [ ] Run "npx playwright codegen demo.playwright.dev/todomvc"
// - [ ] Perform some actions on the page and see the generated code
// - [ ] Copy the generated code and paste it in the test file
// - [ ] Refactor the code to make it more readable if needed
// - [ ] Run the test and verify it works as expected

import { test, expect, Page, Locator } from '@playwright/test'

async function addTodoAndVerify(page: Page, todoText: string) {
  const todoInput = page.getByPlaceholder('What needs to be done?')
  await todoInput.fill(todoText)
  await todoInput.press('Enter')

  const todoItem = page.getByText(todoText)
  await expect(todoItem).toHaveText(todoText)
}

test('playwright codegen test', async ({ page }) => {

  await page.goto('https://demo.playwright.dev/todomvc/#/')

  await addTodoAndVerify(page, 'Learn Playwright !')

  const activeButton = page.getByRole('link', { name: 'Active' })
  await expect(activeButton).toBeVisible()
  await activeButton.click()

  await addTodoAndVerify(page, 'Learn new technologies !')

  const allButton = page.getByRole('link', { name: 'All' })
  await expect(allButton).toBeEnabled()
  await allButton.click()

  const firstTodo = page.locator('li').filter({ hasText: 'Learn Playwright !' })
  const completionCheckBox = firstTodo.getByLabel('Toggle Todo')
  await completionCheckBox.check()
  await expect(completionCheckBox).toBeChecked()

  const completedButton = page.getByRole('link', { name: 'Completed' })
  await completedButton.click()

  const clearCompletedButton = page.getByRole('button', {
    name: 'Clear completed',
  })
  await clearCompletedButton.click()

  const allTodos: Locator[] = await page.locator('.todo-list li').all()
  for (const todo of allTodos) {
    const completionCheckBox = todo.locator('.toggle')
    await expect(completionCheckBox).toBeChecked()
  }

  await expect(page.locator('.todo-list li')).toHaveCount(0)
})
