import { C, addBackground, footer, label, line, paper, smallText, subcopy, title } from "./shared.mjs";

export async function slide09(presentation, ctx) {
  const slide = presentation.slides.add();
  addBackground(slide, ctx, "paper");
  title(slide, ctx, "파일럿에서 정할 것은\n세 가지입니다.");
  subcopy(
    slide,
    ctx,
    "어떤 업무부터 붙일지, 어떤 지표로 볼지, 어떤 승인 경계를 둘지 정해야 합니다.\n범위를 작게 잡을수록 결과 확인도 빨라집니다.",
  );

  paper(slide, ctx, 562, 98, 548, 486, { name: "pilot-slate", fill: C.soft });
  label(slide, ctx, "파일럿 결정표", 594, 130, 154, C.brass);
  const rows = [
    ["범위", "처음 붙일 업무"],
    ["지표", "볼 지표"],
    ["승인 경계", "승인 경계"],
  ];
  rows.forEach(([head, body], i) => {
    const y = 206 + i * 88;
    ctx.addShape(slide, { x: 594, y, w: 120, h: 44, fill: "#E4F2EE", line: ctx.line(C.teal, 1), name: "decision-label" });
    smallText(slide, ctx, head, 610, y + 12, 90, 18, C.teal, 17, true);
    smallText(slide, ctx, body, 752, y + 10, 180, 22, C.ink, 22, true);
    line(slide, ctx, 752, y + 48, 264, C.line, 1);
  });
  ctx.addShape(slide, { x: 594, y: 490, w: 454, h: 46, fill: "#FFF5E6", line: ctx.line(C.line, 1), name: "unresolved-row" });
  smallText(slide, ctx, "담당 / 시작 지점 / 확장 조건", 622, 504, 360, 20, C.muted, 16);

  footer(slide, ctx);
  return slide;
}
