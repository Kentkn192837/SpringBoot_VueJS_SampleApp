import { test } from "playwright/test";

test("get qiit_test", async ({ page }) => {
  // Qiitaのページに移動
  await page.goto("https://qiita.com/organizations/oec");

  // 画面に映ってる範囲をスクショ
  await page.screenshot({ path: "./screenshot/NotFullPage_qiita_device.png" });

  // fullサイズで画面をスクショ
  await page.screenshot({
    path: "./screenshot/fullPage_qiita.png",
    fullPage: true,
  });
});
