export const C = {
  paper: "#F4EDE1",
  soft: "#FFF9EF",
  graphite: "#161817",
  ink: "#2A2E2D",
  muted: "#64615A",
  line: "#D8CDBC",
  brass: "#B78A45",
  teal: "#0F6F69",
  rust: "#A45B44",
  shadow: "#CDBFAE",
  white: "#FFFFFF",
};

export function addBackground(slide, ctx, tone = "paper") {
  const fill = tone === "dark" ? C.graphite : C.paper;
  ctx.addShape(slide, { x: 0, y: 0, w: ctx.W, h: ctx.H, fill, line: ctx.line(fill, 0), name: "background" });
  if (tone !== "dark") {
    for (let x = 72; x < ctx.W; x += 96) {
      ctx.addShape(slide, { x, y: 0, w: 1, h: ctx.H, fill: "#E9DECF", line: ctx.line("#E9DECF", 0), name: "paper-grid-v" });
    }
    for (let y = 68; y < ctx.H; y += 76) {
      ctx.addShape(slide, { x: 0, y, w: ctx.W, h: 1, fill: "#E9DECF", line: ctx.line("#E9DECF", 0), name: "paper-grid-h" });
    }
  }
}

export function title(slide, ctx, text, x = 72, y = 62, w = 430, dark = false) {
  return ctx.addText(slide, {
    text,
    x,
    y,
    w,
    h: 112,
    fontSize: 45,
    color: dark ? C.soft : C.ink,
    bold: true,
    typeface: "Pretendard",
    insets: { left: 0, right: 0, top: 0, bottom: 0 },
    name: "slide-title",
  });
}

export function subcopy(slide, ctx, text, x = 72, y = 190, w = 440, dark = false) {
  return ctx.addText(slide, {
    text,
    x,
    y,
    w,
    h: 118,
    fontSize: 22,
    color: dark ? "#D8D0C4" : C.muted,
    typeface: "Pretendard",
    insets: { left: 0, right: 0, top: 0, bottom: 0 },
    name: "slide-subcopy",
  });
}

export function footer(slide, ctx, dark = false) {
  ctx.addText(slide, {
    text: "ADMATE EXECUTIVE BRIEF",
    x: 72,
    y: 650,
    w: 230,
    h: 18,
    fontSize: 12,
    color: dark ? "#AFA79C" : "#8A8175",
    typeface: "Aptos Mono",
    name: "footer-left",
  });
  ctx.addShape(slide, {
    x: 1048,
    y: 655,
    w: 160,
    h: 1,
    fill: dark ? "#6F665B" : C.line,
    line: ctx.line("transparent", 0),
    name: "footer-rule",
  });
}

export function paper(slide, ctx, x, y, w, h, options = {}) {
  const fill = options.fill || C.soft;
  const line = options.line || C.line;
  const shadow = options.shadow === true;
  if (shadow) {
    ctx.addShape(slide, {
      x: x + 10,
      y: y + 12,
      w,
      h,
      fill: options.shadowFill || C.shadow,
      line: ctx.line(options.shadowFill || C.shadow, 0),
      name: `${options.name || "paper"}-shadow`,
    });
  }
  return ctx.addShape(slide, {
    x,
    y,
    w,
    h,
    fill,
    line: ctx.line(line, options.lineWidth || 1),
    name: options.name || "paper",
  });
}

export function line(slide, ctx, x, y, w, color = C.line, h = 1, name = "rule") {
  return ctx.addShape(slide, { x, y, w, h, fill: color, line: ctx.line(color, 0), name });
}

export function label(slide, ctx, text, x, y, w = 180, color = C.brass) {
  ctx.addShape(slide, { x, y, w, h: 22, fill: color, line: ctx.line(color, 0), name: "label-bar" });
  return ctx.addText(slide, {
    text,
    x: x + 10,
    y: y + 4,
    w: w - 20,
    h: 15,
    fontSize: 12,
    color: C.soft,
    bold: true,
    typeface: "Aptos Mono",
    name: "label-text",
  });
}

export function smallText(slide, ctx, text, x, y, w, h = 30, color = C.muted, size = 16, bold = false) {
  return ctx.addText(slide, {
    text,
    x,
    y,
    w,
    h,
    fontSize: size,
    color,
    bold,
    typeface: "Pretendard",
    insets: { left: 0, right: 0, top: 0, bottom: 0 },
    name: "small-text",
  });
}

export function mono(slide, ctx, text, x, y, w, h = 22, color = C.muted, size = 13) {
  return ctx.addText(slide, {
    text,
    x,
    y,
    w,
    h,
    fontSize: size,
    color,
    typeface: "Aptos Mono",
    name: "mono-text",
  });
}

export function pill(slide, ctx, text, x, y, w, color = C.teal, fill = "#E4F2EE") {
  ctx.addShape(slide, { x, y, w, h: 30, fill, line: ctx.line(color, 1), name: "pill" });
  return ctx.addText(slide, {
    text,
    x,
    y: y + 6,
    w,
    h: 16,
    fontSize: 13,
    color,
    bold: true,
    align: "center",
    typeface: "Pretendard",
    name: "pill-text",
  });
}
