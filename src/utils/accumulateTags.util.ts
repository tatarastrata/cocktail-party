import { ICocktail } from 'appRedux/features/cocktails';
import { ECategories } from 'appRedux/features/modifiers';

const problematicStrings: { [key: string]: string } = {
  ContemporaryClassic: 'Contemporary Classic',
};

export const accumulateCocktailTags = ({
  category,
  tags,
  isAlcoholic,
  IBA,
}: ICocktail): Array<string> => {
  const filteredTags = !!IBA
    ? tags.filter(
        (tag) =>
          !IBA.replace(/\s/g, '').toLowerCase().includes(tag.toLowerCase())
      )
    : tags;

  const allTags = [
    category,
    ...filteredTags,
    `${isAlcoholic ? '' : '😇 Mocktail'}`,
  ].map((item) =>
    problematicStrings.hasOwnProperty(item) ? problematicStrings[item] : item
  );

  const tagList = Array.from(new Set(allTags)).filter(
    (item) =>
      !!item &&
      item !== ECategories.ORDINARY_DRINK &&
      item !== ECategories.COCKTAIL &&
      item !== ECategories.OTHER_UNKNOWN &&
      item !== 'IBA'
  );
  if (tags.includes('IBA')) {
    !!IBA && tagList.push(`🌟 IBA: ${IBA}`);
  }

  return tagList;
};
