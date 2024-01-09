import { Categories } from "../utils/atom"

interface ListCategoryProps {
    category: Categories;
}

const ListCategory = ({category}:ListCategoryProps) => {
    return(
        <div className="flex items-center">
            {category === Categories.TO_DO && <span className="px-2">😀</span>}
            {category === Categories.PET && <span className="px-2">🐶</span>}
            {category === Categories.ACTIVITY && <span className="px-2">⚽️</span>}
            {category === Categories.STUDY && <span className="px-2">📖</span>}
        </div>
    )
}

export default ListCategory;