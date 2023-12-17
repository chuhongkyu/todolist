const CategoryDropBox = () => {
    return(
        <div id="dropdown" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
            <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdown-button">
                <li>
                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100">😀 할일</button>
                </li>
                <li>
                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100">🐶 반려 동물</button>
                </li>
                <li>
                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100">⚽️ 활동/여가</button>
                </li>
                <li>
                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100">📖 도서/공부</button>
                </li>
            </ul>
        </div>
    )
}

export default CategoryDropBox;