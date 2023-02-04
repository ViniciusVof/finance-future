/* eslint-disable react/prop-types */
import * as S from './styles';

export function CategoriesCard({ listEntries }) {
  return (
    <S.Wrapper>
      {listEntries.map(listEntrie => (
        <S.Card>
          <S.Title level={4}>Categorias de {listEntrie.title}</S.Title>
          <S.Categories>
            {listEntrie?.Categories?.map(category => (
              <>
                <S.Category>{category.title}</S.Category>
                <S.SubCategories>
                  {category?.subcategories?.map(subcategory => (
                    <S.SubCategory>{subcategory.title}</S.SubCategory>
                  ))}
                </S.SubCategories>
              </>
            ))}
          </S.Categories>
        </S.Card>
      ))}
    </S.Wrapper>
  );
}
