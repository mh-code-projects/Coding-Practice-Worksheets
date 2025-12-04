/*
  ======================================================
  Practice Worksheet: JavaScript If Statements (Level 2)
  ======================================================
*/
// ... (Previous sections 1 and 2 remain the same) ...
// ... (Challenge Prompts 1-8 remain the same) ...

/*
  9. Combined Holiday and Inventory Check
 
  Task: Write a single conditional statement that checks two conditions using the logical AND operator (&&).
  1. If it is a `isHoliday`.
  2. AND if the `inventoryCount` is less than 10.
  If both are true, print "Urgent Holiday Restock Required!".
*/

/*
  10. Tiered Customer Rating and Role Access
 
  Task: Use an if/else if/else structure to determine a customer's service tier.
  - If `customerRating` is 4.5 or higher AND `userRole` is NOT "guest", print "VIP Gold Service Tier.".
  - ELSE IF `customerRating` is 4.0 or higher, print "Silver Service Tier.".
  - Otherwise, print "Standard Service Tier.".
*/

/*
  11. System Maintenance Blackout (Using NOT and OR)
 
  Task: Write an if statement that determines if the system is *available* for new orders.
  The system is UNAVAILABLE if it's the `isWeekend` OR if the `systemStatus` is "pending_update".
  Use the NOT operator (`!`) around a combination of conditions to check if the system IS available.
  If the system IS available, print "System ready for new orders.".
*/

/*
  12. Complex Purchase Eligibility
 
  Task: Write a comprehensive conditional structure to determine if a purchase can be processed.
  The purchase is **eligible** if:
    (The `cartTotal` is greater than 10 AND the `inventoryCount` is greater than 0)
    OR
    (The `userRole` is "admin" AND `systemStatus` is NOT "error").
  If the purchase is eligible, print "Purchase Eligible. Processing Now.".
  Otherwise, print "Purchase Blocked: Check conditions.".
*/