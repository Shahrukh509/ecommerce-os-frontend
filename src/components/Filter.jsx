import React, {useState} from 'react';
import { Slider } from 'antd';

export const PriceFilter = ({ handleFilters }) => {
  const [range, setRange] = useState([0, 1000]);

  const handleChange = (value) => {
    setRange(value);
    handleFilters({ price: value });
  };

  return (
    <div className="bg-light p-4 mb-30">
      <h5 className="section-title position-relative text-uppercase mb-3">
        <span className="bg-secondary pr-3">Filter by price</span>
      </h5>
      <div className="mb-3">
        <Slider
          range
          min={0}
          max={1000}
          value={range}
          onChange={handleChange}
          tipFormatter={(value) => `${value}`}
        />
        <div className="d-flex justify-content-between mt-2">
          <span>Price: Rs {range[0]}</span>
          <span>To Rs {range[1]}</span>
        </div>
      </div>
    </div>
  );
};

export const ColorFilter = ({ handleFilters }) => {
  const handleColorChange = (event) => {
    const { id, checked } = event.target;
    handleFilters({ color: id });
  };

  return (
    <div className="bg-light p-4 mb-30">
      <h5 className="section-title position-relative text-uppercase mb-3">
        <span className="bg-secondary pr-3">Filter by color</span>
      </h5>
      <div className="custom-control custom-checkbox d-flex flex-column mb-3">
        <div className="mb-2">
          <input type="checkbox" className="custom-control-input" id="color-all" onChange={handleColorChange} />
          <label className="custom-control-label" htmlFor="color-all">All Colors</label>
        </div>
        <div className="mb-2">
          <input type="checkbox" className="custom-control-input" id="blue" onChange={handleColorChange} />
          <label className="custom-control-label" htmlFor="blue">Blue</label>
        </div>
        <div className="mb-2">
          <input type="checkbox" className="custom-control-input" id="black" onChange={handleColorChange} />
          <label className="custom-control-label" htmlFor="black">Black</label>
        </div>
        <div className="mb-2">
          <input type="checkbox" className="custom-control-input" id="white" onChange={handleColorChange} />
          <label className="custom-control-label" htmlFor="white">White</label>
        </div>
      </div>
    </div>
  );
};

export const SizeFilter = ({ handleFilters }) => {
  const handleSizeChange = (event) => {
    const { id, checked } = event.target;
    handleFilters({ size: id });
  };

  return (
    <div className="bg-light p-4 mb-30">
        <div className="custom-control custom-checkbox d-flex flex-column mb-3 mb-3">
        <div className="mb-2">
          <input type="checkbox" className="custom-control-input" id="size-all" onChange={handleSizeChange} />
          <label className="custom-control-label" htmlFor="size-all">All Sizes</label>
        </div>
        <div className="mb-2">
          <input type="checkbox" className="custom-control-input" id="S" onChange={handleSizeChange} />
          <label className="custom-control-label" htmlFor="S">Small</label>
        </div>
        <div className="mb-2">
          <input type="checkbox" className="custom-control-input" id="M" onChange={handleSizeChange} />
          <label className="custom-control-label" htmlFor="M">Medium</label>
        </div>
        <div className="mb-2">
          <input type="checkbox" className="custom-control-input" id="L" onChange={handleSizeChange} />
          <label className="custom-control-label" htmlFor="L">Large</label>
        </div>
        <div className="mb-2">
          <input type="checkbox" className="custom-control-input" id="XL" onChange={handleSizeChange} />
          <label className="custom-control-label" htmlFor="XL">Extra Large</label>
        </div>
        <div className="mb-2">
          <input type="checkbox" className="custom-control-input" id="XXL" onChange={handleSizeChange} />
          <label className="custom-control-label" htmlFor="XXL">Double Extra Large</label>
        </div>
          {/* <span className="badge border font-weight-normal">1000</span> */}
        </div>
    </div>
  );
};
