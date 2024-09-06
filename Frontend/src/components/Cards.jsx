import React from 'react'

function Cards({item}) {

  return (
    <>
    <div className="mt-4 my-3 p-3 ">
    <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">
     {item.name}
      <div className="badge badge-secondary ">Free</div>
    </h2>
    <p>Lorem ipsum dolor sit amet</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge cursor-pointer px-2 py-3  badge-outline hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards
