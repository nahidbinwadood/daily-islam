# Daily Islam

Bangladesh-first Islamic knowledge and daily-practice web platform: Quran, Hadith, Salah, duas and learning, with every religious text shown with its source.

- Requirements: [docs/product-requirements.md](docs/product-requirements.md)
- Design plan: [docs/design-plan.md](docs/design-plan.md)
- Research: [reports/](reports/) and [research_notes/](research_notes/)

## Prototype

Static HTML, no build step. Quran text, Bangla translations, tafsir and recitation load live from the Quran.com API.

```sh
cd prototype
python -m http.server 8765
# open http://localhost:8765
```

- `index.html`: homepage (prayer-time almanac, ayah of the day, hadith library, learning path, Quranic duas, tasbih)
- `quran.html`: Quran reader (114 surahs, 3 Bangla translations, word-by-word, recitation with word highlighting, tafsir, bookmarks)
