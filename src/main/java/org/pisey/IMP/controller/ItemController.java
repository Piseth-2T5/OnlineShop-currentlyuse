package org.pisey.IMP.controller;

//import java.util.List;

//import javax.validation.Valid;
//import org.pisey.IMP.service.ItemService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.ui.Model;
//import org.springframework.validation.BindingResult;
//import org.springframework.validation.ObjectError;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.ModelAttribute;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;

//import org.pisey.IMP.model.Item;
//import org.pisey.IMP.model.ItemType;
////import org.pisey.IMP.model.Vendor;
//@RestController
//@RequestMapping("/api/items")
public class ItemController {

//	
//	
//	@Autowired
//	private ItemService itemService;
//	
////	private ItemConvertor itemConvertor;
//	
//	
//	/// CRUD Operation of Item RestAPI
//	// Get all item restAPI
//	@GetMapping("/view")
//	public List<Item> getAllItem(){
//		return  itemService.getAllItems();
//	}
	
	// Get Item by ID And Check validationID;
	
	// Create Item and Check validationName, 
	
	
	// Update Item and Check ValidationId and ValidationName
	
	
	// Delete Item by ID 
	
	
	// Delete ALl Item 
	
	
//	// Create Item RestAPI
//	@PostMapping
//	public String Create(@Valid @ModelAttribute("itemDto") ItemDto itemDto, BindingResult result, Model model) {
//		Vendor vendor = null;
//		ItemType itemType = null;
//		Item item = null;
//		String err = itemService.validateItemName(itemDto.getItemName(),itemDto.getItemType());
//		if (!err.isEmpty()) {
//			ObjectError error = new ObjectError("globalError", err);
//			result.addError(error);
//		}
//		if (result.hasErrors()) {
//			return "/Item/Create";
//		}
//		itemService.saveItem(item);
//	}
//	
	
	
	
	
//	// Get item by Id RestAPI
//	@GetMapping("/items/{id}")
//	public ResponseEntity<Item> getItemById(@PathVariable Long id){
//		Item item = itemRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Item not exite with Id :" + id));
//		return ResponseEntity.ok(item);
//	}
//	
//	// Update Item by Id
//	@PutMapping("/items/{id}")
//	public ResponseEntity<Item> updateItem(@PathVariable Long id,@RequestBody Item itemDetails){
//		Item item = itemRepository.findById(id).orElseThrow(() ->new ResourceNotFoundException("Item not exist with id:" + id));
//		
//		item.setName(itemDetails.getName());
//		item.setQuantity(itemDetails.getQuantity());
//		item.setPrice(itemDetails.getPrice());
//		item.setFineRate(itemDetails.getFineRate());
//		item.setVendor(itemDetails.getVendor());
//
//		Item updateItem =  itemRepository.save(item);
//		return ResponseEntity.ok(updateItem); 
//	}
//	// Delete Item By Id or name ApI
//	@DeleteMapping("/items/{id}")
//	public ResponseEntity<Map<String , Boolean>> deleteItem(@PathVariable Long id){
//		Item item = itemRepository.findById(id).orElseThrow(() ->new ResourceNotFoundException("Item not exist with id:" + id));
//		
//		itemRepository.delete(item);
//		Map< String, Boolean> respone = new HashMap<>();
//		respone.put("Deleted", Boolean.TRUE);
//		return ResponseEntity.ok(respone); 
//	}
}
