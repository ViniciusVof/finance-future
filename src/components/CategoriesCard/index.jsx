/* eslint-disable array-callback-return */

/* eslint-disable react/prop-types */
import * as S from './styles';

export function CategoriesCard({ categories }) {
  return (
    <S.Wrapper>
      {categories.map(list => (
        <S.Card>
          <S.Title level={4}>
            Categorias de {list.type === 'expenses' ? 'Despesas' : 'Receitas'}
          </S.Title>
          <S.Categories>
            {list.categories
              .filter(item => !item.parentId)
              .map(category => (
                <>
                  <S.Category>{category.title}</S.Category>
                  <S.SubCategories>
                    {list.categories
                      .filter(item =>
                        item.parentId ? item.parentId === category.id : null
                      )
                      .map(subcategory => (
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
