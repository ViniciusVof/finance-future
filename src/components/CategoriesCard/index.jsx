/* eslint-disable array-callback-return */

/* eslint-disable react/prop-types */
import * as S from './styles';

export function CategoriesCard({ categories }) {
  return (
    <S.Wrapper>
      {categories.map(category => (
        <S.Card>
          <S.Title level={4}>Categorias de {category.type?.title}</S.Title>
          <S.Categories>
            <S.Category>{category.title}</S.Category>
            <S.SubCategories>
              {category.subcategories.map(subcategory => (
                <S.SubCategory>{subcategory.title}</S.SubCategory>
              ))}
            </S.SubCategories>
          </S.Categories>
        </S.Card>
      ))}
    </S.Wrapper>
  );
}
