/* eslint-disable react/prop-types */
import * as I from '@ant-design/icons';
import * as A from 'antd';

import * as S from './styles';

export function CategoriesCard({ listEntries, handleEdit, handleRemove }) {
  // eslint-disable-next-line react/no-unstable-nested-components
  function ActionsButtons({ type, data, showDelete }) {
    return (
      <>
        {showDelete && (
          <A.Button
            type="secondary"
            icon={<I.DeleteOutlined />}
            onClick={() => handleRemove(type, data)}
          />
        )}
        <A.Button
          type="secondary"
          icon={<I.EditOutlined />}
          onClick={() => handleEdit(type, data)}
        />
      </>
    );
  }
  return (
    <S.Wrapper>
      {listEntries.map(listEntrie => (
        <S.Card>
          <S.WrapperTitle>
            <S.Title level={4}>Categorias de {listEntrie.title}</S.Title>
          </S.WrapperTitle>
          <S.Categories>
            {listEntrie?.Categories?.map(category => (
              <>
                <S.Category>
                  <ActionsButtons
                    type="category"
                    data={category}
                    showDelete={listEntrie?.Categories?.length > 1}
                  />
                  {category.title}
                </S.Category>

                <S.SubCategories>
                  {category?.subcategories?.map(subcategory => (
                    <S.SubCategory>
                      <ActionsButtons
                        type="subcategory"
                        data={subcategory}
                        showDelete
                      />
                      {subcategory.title}
                    </S.SubCategory>
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
