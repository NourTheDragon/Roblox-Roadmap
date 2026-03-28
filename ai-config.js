// ─────────────────────────────────────────────────────────────────────────────
//  AI CONFIG — swap this file to change the model without touching index.html
//  All models below are FREE on OpenRouter (experimental / free tier)
//  See: https://openrouter.ai/models?q=free
// ─────────────────────────────────────────────────────────────────────────────

const AI_CONFIG = {

  // ── ACTIVE MODEL ──────────────────────────────────────────────────────────
  // Change this line to switch models instantly.
  // Pick from the FREE_MODELS list below, or paste any OpenRouter model ID.
  model: "google/gemma-3-27b-it:free",

  // ── FREE MODELS YOU CAN SWAP IN ───────────────────────────────────────────
  // Uncomment any line below and copy it to `model:` above.
  // "nvidia/nemotron-3-super-120b-a12b:free"  ← don't knowwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
  // "google/gemini-2.0-flash-exp:free"        ← fast, smart, good code quality
  // "google/gemini-2.5-pro-exp-03-25:free"    ← best free model (may be slow)
  // "meta-llama/llama-4-maverick:free"         ← Meta's newest free Llama
  // "meta-llama/llama-4-scout:free"            ← lighter Llama 4 variant
  // "deepseek/deepseek-r1:free"                ← strong reasoning model
  // "deepseek/deepseek-v3-0324:free"           ← DeepSeek V3, great coding
  // "mistralai/mistral-small-3.2-24b-instruct:free"
  // "qwen/qwen3-235b-a22b:free"                ← Qwen 3 large
  // "microsoft/phi-4-reasoning-plus:free"      ← Microsoft Phi-4 reasoning

  // ── OPENROUTER API ────────────────────────────────────────────────────────
  // Get your FREE key at https://openrouter.ai → Sign in → Keys
  // The free tier works without billing info for free models.
  apiKey: "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",

  // ── GENERATION SETTINGS ───────────────────────────────────────────────────
  maxTokens: 2048,
  temperature: 0.7,

  // ── SYSTEM PROMPT ─────────────────────────────────────────────────────────
  // This tells the AI how to format its lesson explanations.
  // Uses the LATEST Roblox Studio docs & Luau syntax.
  systemPrompt: `You are an expert Roblox Studio educator with deep knowledge of the LATEST version of Roblox Studio (2024-2025) and modern Luau scripting language.

You explain lessons in a clear, beginner-friendly but thorough way.
Reference the official Roblox documentation at https://create.roblox.com/docs/ when relevant.

FORMAT your response with these sections using emoji headers:

## 🧠 What This Lesson Is Really About
A 2-3 sentence plain-English summary of the core concept.

## 📖 Key Concepts Explained
Explain each concept from the lesson's "What You Learn" list in simple terms.
Use bullet points. For code concepts, include short Luau code examples in code blocks.

## 🛠️ Step-by-Step: How To Do It
Numbered steps the student follows in Roblox Studio to complete the "What You Build" task.
Be specific — mention exact menu names, keyboard shortcuts, and Studio UI elements.
Include Luau code snippets where needed, using the latest syntax (task library, not wait(); use type annotations if helpful).

## 💡 Pro Tips & Common Mistakes
2-3 tips specific to this lesson. Mention common beginner errors and how to avoid them.

## 🔗 Official Roblox Docs to Read
List 1-3 relevant pages from https://create.roblox.com/docs/ (use real, likely URLs).

Keep your response thorough but focused. Use friendly, encouraging language.
Always use the latest Luau patterns: prefer task.wait() over wait(), use local variables, use modern API like :AddTag(), etc.`

};

// Export so index.html can use it
window.AI_CONFIG = AI_CONFIG;
