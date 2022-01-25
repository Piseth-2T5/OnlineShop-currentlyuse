package org.pisey.IMP.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


import org.pisey.IMP.exception.ResourceNotFoundException;
import org.pisey.IMP.model.Item;
import org.pisey.IMP.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/item/")
public class ItemController {

	@Autowired
	private ItemRepository itemRepository;
	
	
	/// CRUD Operation of Item RestAPI
	// Get all item restAPI
	@GetMapping("/items")
	public List<Item>  getAllItems(){
		return itemRepository.findAll();
	}
	
	// Create Item RestAPI
	@PostMapping("/items")
	public Item addItem(@RequestBody  Item item) {
		return itemRepository.save(item);
	}
	
	// Get item by Id RestAPI
	@GetMapping("/items/{id}")
	public ResponseEntity<Item> getItemById(@PathVariable Long id){
		Item item = itemRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Item not exite with Id :" + id));
		return ResponseEntity.ok(item);
	}
	
	// Update Item by Id
	@PutMapping("/items/{id}")
	public ResponseEntity<Item> updateItem(@PathVariable Long id,@RequestBody Item itemDetails){
		Item item = itemRepository.findById(id).orElseThrow(() ->new ResourceNotFoundException("Item not exist with id:" + id));
		
		item.setName(itemDetails.getName());
		item.setQuantity(itemDetails.getQuantity());
		item.setPrice(itemDetails.getPrice());
		item.setFineRate(itemDetails.getFineRate());
		item.setVendor(itemDetails.getVendor());
		
		Item updateItem =  itemRepository.save(item);
		return ResponseEntity.ok(updateItem); 
	}
	// Delete Item By Id or name ApI
	@DeleteMapping("/items/{id}")
	public ResponseEntity<Map<String , Boolean>> deleteItem(@PathVariable Long id){
		Item item = itemRepository.findById(id).orElseThrow(() ->new ResourceNotFoundException("Item not exist with id:" + id));
		
		itemRepository.delete(item);
		Map< String, Boolean> respone = new HashMap<>();
		respone.put("Deleted", Boolean.TRUE);
		return ResponseEntity.ok(respone); 
	}
}
