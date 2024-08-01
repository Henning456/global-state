export function LanguageSelector() {
  return (
    <select>
      {[
        { key: "de", value: "Deutsch" },
        { key: "en", value: "Englisch" },
        { key: "jp", value: "Japanisch" },
      ].map((languageConfig) => {
        return (
          <option key={languageConfig.key} value={languageConfig.key}>
            {languageConfig.value}
          </option>
        );
      })}
    </select>
  );
}
