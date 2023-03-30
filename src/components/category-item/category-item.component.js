// import the category item
import  './category-item.style.scss';


// create a component as a functional file

const CategoryItem = ({category}) => {
const {imageUrl,title} = category;

  // each function return something 
  return(
    <div className='category-container'>
          <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
          }} />
          <div className='category-body-container'>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>z
        </div>
  )
}

// export by default 
export default CategoryItem;
