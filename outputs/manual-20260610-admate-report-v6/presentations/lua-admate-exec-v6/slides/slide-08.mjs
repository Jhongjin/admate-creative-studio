import { C, addBackground, footer, label, line, paper, smallText, subcopy, title } from "./shared.mjs";

export async function slide08(presentation, ctx) {
  const slide = presentation.slides.add();
  addBackground(slide, ctx, "paper");
  title(slide, ctx, "운영 지식이 쌓이면\n다음 기회가 보입니다.", 72, 62, 500);
  subcopy(
    slide,
    ctx,
    "반복되는 문제, 자주 쓰는 기준, 새로 필요한 기능이 데이터로 남습니다.\n그 안에서 신사업 후보와 MVP 방향도 더 차분하게 검토합니다.",
  );

  paper(slide, ctx, 612, 128, 348, 118, { fill: "#FFF5E6", name: "memory-sheet-1" });
  paper(slide, ctx, 652, 230, 348, 118, { fill: C.soft, name: "memory-sheet-2" });
  paper(slide, ctx, 692, 332, 348, 118, { fill: "#F2F8F5", line: "#C8DDD8", name: "memory-sheet-3" });
  label(slide, ctx, "운영 기억", 638, 154, 116, C.teal);
  smallText(slide, ctx, "자주 확인한 기준", 638, 198, 180, 24, C.ink, 20, true);
  smallText(slide, ctx, "반복되는 리스크", 678, 300, 180, 24, C.ink, 20, true);
  smallText(slide, ctx, "새로 필요한 기능", 718, 402, 180, 24, C.ink, 20, true);

  line(slide, ctx, 972, 388, 92, C.teal, 2);
  ctx.addShape(slide, { x: 1064, y: 356, w: 94, h: 94, fill: "#F8E7DE", line: ctx.line(C.rust, 1), name: "future-marker" });
  smallText(slide, ctx, "다음\n후보", 1082, 384, 58, 38, C.rust, 16, true);

  footer(slide, ctx);
  return slide;
}
