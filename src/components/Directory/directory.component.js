import CategoryItem from '../category-item/category-item.component';
import './categories-item.style.scss'; 

// receives the whole categories as a props
const Directory = ({categories}) => {
  return(
    <div className='categories-container'>

      {/* category item component */}
      {categories.map((category) => (
        <CategoryItem  category = {category} key = {category.id} />
      ))}
    </div>
  )
}

// export default directory
export default Directory;
