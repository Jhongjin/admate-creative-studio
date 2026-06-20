import { C, addBackground, footer, label, line, mono, paper, smallText, subcopy, title } from "./shared.mjs";

export async function slide02(presentation, ctx) {
  const slide = presentation.slides.add();
  addBackground(slide, ctx, "paper");
  title(slide, ctx, "광고 운영의 시간은\n확인에서 샙니다.");
  subcopy(
    slide,
    ctx,
    "브리프, 정책, 세팅값, 캡처, 보고 자료를 매번 다시 봅니다.\n문제는 확인 자체보다, 확인한 이유가 흩어진다는 점입니다.",
  );

  paper(slide, ctx, 680, 88, 430, 128, { name: "fragment-brief", fill: C.soft });
  label(slide, ctx, "BRIEF", 704, 112, 86, C.teal);
  smallText(slide, ctx, "요청 조건 / 일정 / 예산", 704, 154, 230, 24, C.ink, 21, true);
  mono(slide, ctx, "checked, then lost", 704, 186, 190, 18, C.muted, 12);

  paper(slide, ctx, 762, 246, 356, 112, { name: "fragment-policy", fill: "#FFF5E6" });
  label(slide, ctx, "POLICY", 786, 270, 96, C.brass);
  smallText(slide, ctx, "플랫폼 정책 확인", 786, 312, 220, 24, C.ink, 21, true);

  paper(slide, ctx, 610, 376, 380, 118, { name: "fragment-capture", fill: C.soft });
  label(slide, ctx, "CAPTURE", 634, 400, 112, C.teal);
  smallText(slide, ctx, "화면 증빙 / 저장 위치", 634, 442, 246, 24, C.ink, 21, true);

  paper(slide, ctx, 832, 470, 304, 94, { name: "fragment-report", fill: "#F7EAE0" });
  label(slide, ctx, "REPORT", 856, 492, 102, C.rust);
  smallText(slide, ctx, "보고용 근거 재정리", 856, 532, 210, 24, C.ink, 20, true);

  ctx.addShape(slide, { x: 470, y: 262, w: 156, h: 156, fill: "#FFF0E9", line: ctx.line(C.rust, 2), name: "reason-gap" });
  smallText(slide, ctx, "reason\ngap", 507, 306, 90, 54, C.rust, 26, true);
  line(slide, ctx, 602, 332, 72, C.rust, 2, "gap-line");
  line(slide, ctx, 626, 335, 76, C.rust, 1, "gap-line-2");

  footer(slide, ctx);
  return slide;
}
