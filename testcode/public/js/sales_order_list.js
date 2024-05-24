frappe.listview_settings['Sales Order'] = {
    button: {
        show: function(doc) {
            return true; 
        },
        get_label: function() {
            return __('Show Details'); 
        },
        get_description: function(doc) {
            return __('Show details of {0}', [doc.name]); 
        },
        action: function(doc) {
            var order_id = doc.name;
            frappe.call({
                method: 'testcode.order.get_order_type',
                args: {
                    order_id: order_id
                },
                callback: function(response) {
                    if(response && response.message) {
                        var fetched_order_type = response.message;
                        frappe.msgprint({
                            title: __('Order Details'),
                            message: __('Order ID: {0}<br>Order Type: {1}', [order_id, fetched_order_type])
                        });
                    } else {
                        frappe.msgprint(__('Failed to fetch order type'));
                    }
                }
            });
        }
    }
};
