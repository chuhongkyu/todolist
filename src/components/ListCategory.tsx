import { Categories } from "../utils/atom"

interface ListCategoryProps {
    category: Categories;
}

const ListCategory = ({category}:ListCategoryProps) => {
    return(
        <>
            {category == Categories.TO_DO && <span className="px-4">😀</span>}
            {category == Categories.PET && <span className="px-4">🐶</span>}
            {category == Categories.ACTIVITY && <span className="px-4">⚽️</span>}
            {category == Categories.STUDY && <span className="px-4">📖</span>}
        </>
    )
}

export default ListCategory;