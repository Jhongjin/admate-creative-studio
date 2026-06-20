import { C, addBackground, footer, label, line, paper, smallText, subcopy, title } from "./shared.mjs";

export async function slide07(presentation, ctx) {
  const slide = presentation.slides.add();
  addBackground(slide, ctx, "paper");
  title(slide, ctx, "초기 성과는\n운영 지표로 봅니다.");
  subcopy(
    slide,
    ctx,
    "처음부터 매출 효과를 약속하기보다 확인 시간, 오류 예방, 재작업 감소를 봐야 합니다.\n파일럿의 기준도 이 세 가지에서 잡는 편이 현실적입니다.",
  );

  paper(slide, ctx, 514, 92, 646, 490, { name: "scorecard", fill: C.soft });
  label(slide, ctx, "파일럿 측정표", 546, 122, 154, C.brass);
  const colX = [748, 884, 1020];
  ["현재", "점검", "판단"].forEach((col, i) => {
    smallText(slide, ctx, col, colX[i], 170, 110, 20, C.ink, 15, true);
  });
  const metrics = ["수동 확인 시간", "리스크 후보 발견", "증빙 확인 시간", "재사용된 기준"];
  metrics.forEach((metric, i) => {
    const y = 222 + i * 70;
    smallText(slide, ctx, metric, 546, y + 8, 180, 22, C.ink, 17, true);
    colX.forEach((x, j) => {
      ctx.addShape(slide, {
        x,
        y,
        w: 96,
        h: 38,
        fill: j === 2 ? "#E4F2EE" : "#F7EFE3",
        line: ctx.line(j === 2 ? C.teal : C.line, 1),
        name: "score-cell",
      });
      if (j === 2) line(slide, ctx, x + 18, y + 20, 58, C.teal, 2);
    });
    line(slide, ctx, 546, y + 54, 552, C.line, 1);
  });

  footer(slide, ctx);
  return slide;
}
