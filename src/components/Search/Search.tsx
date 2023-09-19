import React from 'react'

const Search = ({lable = '', buttonLable = '', value, inputType, onChange, onClick}:any) => {
  return (
    <div className="bg-white w-[500px] mx-auto mt-5 shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
        <form className="sm:flex sm:items-center">
            <div className="w-full sm:max-w-xs">
            <label htmlFor="email" className="sr-only">
                {lable}
            </label>
            <input
                type={inputType}
                name="email"
                value={value}
                className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="you@example.com"
                onChange={onChange}
            />
            </div>
            <button
            type="button"
            onClick={onClick}
            className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto"
            >
            {buttonLable}
            </button>
        </form>
    </div>
  </div>
  )
}

export default Search