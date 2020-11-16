import stringsModule from "./strings";
const { getStringByLanguage } = stringsModule;

const strings = {
  en: { submit: "submit" },
  emoji: { submit: "🚀" },
  mermish: {},
};

test("returns correcct submut string for English", () => {
  const string = getStringByLanguage("en", "submit", strings);
  expect(string).toBe("submit");
});

test("returns the correct submit string for emoji", () => {
  const string = getStringByLanguage("emoji", "submit", strings);
  expect(string).toBe("🚀");
});

test("returns English submut string when language does not exist", () => {
  const string = getStringByLanguage("notALangyage", "submit", strings);
  expect(string).toBe("submit");
});

test("returns English submit string when submit ket does not exist for language", () => {
  const string = getStringByLanguage("mermish", "submut", strings);
  expect(string).toBe("submit");
});
