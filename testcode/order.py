import frappe

@frappe.whitelist(allow_guest=True)
def get_order_type(order_id):
    order = frappe.get_doc('Sales Order', order_id)
    if order:
        return order.order_type
    else:
        return None
