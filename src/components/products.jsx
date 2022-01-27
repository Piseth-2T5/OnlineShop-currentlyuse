import React, { Component } from "react";
import _ from "lodash";
import Table from "./commons/table";
import Pagination from "./commons/pagination";
import ItemsControl from "./commons/itemsControl";
import EmptyPage from "./commons/emtpyPage";
import { deleteProduct, getProducts } from "../services/productsTest";
import { paginate } from "../utils/paginate";
import "../main.style.css";
import { getCategories } from "../services/categoryTest";

class Products extends Component {
  state = {
    products: [],
    pageSize: 10,
    columnSort: { path: "_id", order: "desc" },
    currentPage: 1,
    clicked: true,
    filteredItemsDisplay: [],
    itemsFilteredByName: [],
  };
  columns = [
    { name: "Name", path: "name" },
    { name: "Category", path: "category.name" },
    { name: "Price", path: "price" },
    { name: "IN Stock", path: "inStock" },
    { name: "Rate", path: "rate" },
  ];
  componentDidMount = () => {
    const categories = [{ name: "All Categories" }, ...getCategories()];
    this.setState({ products: getProducts(), categories });
  };
  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };
  handleDisplayFilter = (filter) => {
    const products = [...this.state.products];
    const filteredItems = products.filter(
      (product) => product.category.name.toUpperCase() === filter
    );
    this.setState({ filteredItems });
  };
  handleFilter = (name) => {
    const { filteredItemsDisplay: arrays, products } = this.state;
    const items = [...products];

    if (name) arrays.push(name);
    const filteredItemsDisplay = [...arrays];
    const filteredItems = name
      ? items.filter(
          (item) =>
            item.category.name.toUpperCase() ===
            filteredItemsDisplay[filteredItemsDisplay.length - 1]
        )
      : items;
    this.setState({
      filteredItems: filteredItems,
      currentPage: 1,
      clicked: true,
      filteredItemsDisplay,
    });
    name
      ? this.setState({ clicked: false })
      : this.setState({ filteredItemsDisplay: [] });
  };
  handleDelete = (filterName) => {
    const items = [...this.state.products];
    let filteredItems = [...this.state.filteredItems];
    let filteredItemsDisplay = [...this.state.filteredItemsDisplay];

    filteredItemsDisplay = filteredItemsDisplay.filter(
      (item) => item !== filterName
    );

    filteredItems = filterName
      ? items.filter(
          (item) =>
            item.category.name.toUpperCase() ===
            filteredItemsDisplay[filteredItemsDisplay.length - 1]
        )
      : items;
    this.setState({ filteredItemsDisplay, filteredItems });

    filteredItemsDisplay.length === 0
      ? this.setState({ clicked: true })
      : this.setState({ clicked: false });
  };
  handleSort = (columnSort) => {
    this.setState({ columnSort });
  };
  handleDeleteProduct = (id) => {
    let products = [...this.state.products];
    products = deleteProduct(id);
    this.setState({ products });
  };
  handleEdit = (id) => {
    console.log(id);
  };
  handleSearch = (query) => {
    const products = [...this.state.products];
    const itemsFilteredByName = products.filter((product) =>
      product.name.toLowerCase().startsWith(query.toLowerCase())
    );
    this.setState({
      itemsFilteredByName,
      query,
      filteredItemsDisplay: [],
      clicked: true,
    });
  };
  render() {
    const {
      columnSort,
      clicked,
      currentPage,
      pageSize,
      products: allProducts,
      filteredItems,
      filteredItemsDisplay,
      itemsFilteredByName,
      query,
    } = this.state;

    const uniqItemsCategories = _.uniq(
      allProducts.map((product) => product.category.name.toUpperCase())
    );

    let items = query ? [...itemsFilteredByName] : allProducts;
    if (!clicked)
      items = filteredItemsDisplay.length !== 0 ? filteredItems : allProducts;

    const sortItems = _.orderBy(items, [columnSort.path], [columnSort.order]);
    const products = paginate(sortItems, currentPage, pageSize);
    return this.state.products.length == 0 ? (
      <EmptyPage />
    ) : (
      <div className="container-fluid">
        <ItemsControl
          clicked={clicked}
          items={uniqItemsCategories}
          itemsDisplay={filteredItemsDisplay}
          onFilter={this.handleFilter}
          onDelete={this.handleDelete}
          onDisplayFilter={this.handleDisplayFilter}
          raiseSearchQuery={this.handleSearch}
        />
        <Table
          filteredItems={items}
          items={products}
          onSort={this.handleSort}
          columnSort={columnSort}
          columns={this.columns}
          onDelete={this.handleDeleteProduct}
          onEdit={this.handleEdit}
        />
        <Pagination
          currentPage={currentPage}
          pageSize={pageSize}
          itemCount={items.length}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Products;
