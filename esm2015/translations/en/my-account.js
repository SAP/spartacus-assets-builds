export const myAccount = {
    orderDetails: {
        orderId: 'Order #',
        purchaseOrderId: 'Purchase Order #',
        emptyPurchaseOrderId: 'None',
        none: 'None {{value}}',
        placed: 'Placed',
        placedBy: 'Placed By',
        unit: 'Unit',
        costCenter: 'Cost Center',
        costCenterAndUnit: 'Cost Center / Unit',
        costCenterAndUnitValue: '{{costCenterName}} / {{unitName}}',
        payByAccount: 'Pay by Account',
        paidByCreditCard: '(paid by credit card)',
        status: 'Status',
        shippedOn: 'Shipped on',
        deliveryStatus_IN_TRANSIT: 'In Transit',
        deliveryStatus_READY_FOR_PICKUP: 'Ready for Pickup',
        deliveryStatus_READY_FOR_SHIPPING: 'Ready for Shipping',
        deliveryStatus_WAITING: 'Waiting',
        deliveryStatus_DELIVERING: 'Delivering',
        deliveryStatus_PICKPACK: 'Preparing for Shipment',
        deliveryStatus_PICKUP_COMPLETE: 'Pickup Complete',
        deliveryStatus_DELIVERY_COMPLETED: 'Delivery Complete',
        deliveryStatus_PAYMENT_NOT_CAPTURED: 'Payment Issue',
        deliveryStatus_READY: 'In Process',
        deliveryStatus_DELIVERY_REJECTED: 'Delivery Rejected',
        deliveryStatus_SHIPPED: 'Shipped',
        deliveryStatus_TAX_NOT_COMMITTED: 'Tax Issue',
        deliveryStatus_CANCELLED: 'Cancelled',
        statusDisplay_cancelled: 'Cancelled',
        statusDisplay_cancelling: 'Cancel Pending',
        statusDisplay_completed: 'Completed',
        statusDisplay_created: 'Created',
        statusDisplay_error: 'Pending',
        statusDisplay_Error: 'Pending',
        statusDisplay_processing: 'Pending',
        statusDisplay_open: 'Open',
        statusDisplay_pending: {
            approval: 'Pending Approval',
            merchant: {
                approval: 'Pending Merchant Approval',
            },
        },
        statusDisplay_approved: 'Approved',
        statusDisplay_rejected: 'Rejected',
        statusDisplay_merchant: {
            approved: 'Merchant Approved',
            rejected: 'Merchant Rejected',
        },
        statusDisplay_assigned: {
            admin: 'Assigned To Administrator',
        },
        consignmentTracking: {
            action: 'Track package',
            dialog: {
                header: 'Tracking Information',
                shipped: 'Shipped',
                estimate: 'Estimated Delivery',
                carrier: 'Delivery Service',
                trackingId: 'Tracking Number',
                noTracking: 'The package has not been dispatched from the warehouse. The tracking information will be available after the package is shipped.',
                loadingHeader: 'Consignment Tracking',
            },
        },
        cancellationAndReturn: {
            returnAction: 'Request a Return',
            cancelAction: 'Cancel Items',
            item: 'Item',
            itemPrice: 'Item Price',
            quantity: 'Max Quantity',
            returnQty: 'Quantity to Return',
            cancelQty: 'Quantity to Cancel',
            setAll: 'Set all quantities to maximum',
            totalPrice: 'Total',
            submit: 'Submit Request',
            returnSuccess: 'Your return request ({{rma}}) was submitted',
            cancelSuccess: 'Your cancellation request was submitted (original order {{orderCode}} will be updated)',
        },
        approvalDetails: {
            header: 'Customer Approval Details',
            permission: 'Permission',
            approver: 'Approver',
            status: 'Status',
            approverComments: 'Approver Comments',
            noApprovalNotes: 'None',
            permissionType_B2BBudgetExceededPermission: 'The budget associated with chosen cost center has been exceeded',
            permissionType_B2BOrderThresholdPermission: 'Order total exceeded per-order limit',
            permissionType_B2BOrderThresholdTimespanPermission: 'Order total exceeded per-timespan limit',
        },
    },
    orderHistory: {
        orderHistory: 'Order history',
        orderId: 'Order #',
        date: 'Date',
        status: 'Status',
        total: 'Total',
        noOrders: 'We have no order records for this account.',
        startShopping: 'Start Shopping',
        sortByMostRecent: 'Sort by Most recent',
    },
    closeAccount: {
        confirmAccountClosure: 'Confirm Account Closure',
        confirmAccountClosureMessage: 'Are you sure you want to close your account?',
        closeMyAccount: 'CLOSE MY ACCOUNT',
        accountClosedSuccessfully: 'Account closed with success',
        accountClosedFailure: 'Failed to close account',
    },
    updateEmailForm: {
        newEmailAddress: {
            label: 'New email address',
            placeholder: 'Enter email',
        },
        confirmNewEmailAddress: {
            label: 'Confirm new email address',
            placeholder: 'Enter email',
        },
        enterValidEmail: 'Please enter a valid email.',
        bothEmailMustMatch: 'Both emails must match',
        password: {
            label: 'Password',
            placeholder: 'Enter password',
        },
        pleaseInputPassword: 'Please input password',
        emailUpdateSuccess: 'Success. Please sign in with {{ newUid }}',
    },
    updatePasswordForm: {
        oldPassword: {
            label: 'Old Password',
            placeholder: 'Old Password',
        },
        oldPasswordIsRequired: 'Old password is required.',
        newPassword: {
            label: 'New Password',
            placeholder: 'New Password',
        },
        passwordMinRequirements: 'Password must be six characters minimum, with one uppercase letter, one number, one symbol',
        confirmPassword: {
            label: 'Confirm New Password',
            placeholder: 'Confirm Password',
        },
        bothPasswordMustMatch: 'Both password must match',
        passwordUpdateSuccess: 'Password updated with success',
    },
    updateProfileForm: {
        title: '',
        none: '',
        firstName: {
            label: 'First name',
            placeholder: 'First name',
        },
        firstNameIsRequired: 'First name is required.',
        lastName: {
            label: 'Last name',
            placeholder: 'Last name',
        },
        lastNameIsRequired: 'Last name is required.',
        profileUpdateSuccess: 'Personal details successfully updated',
    },
    consentManagementForm: {
        clearAll: 'Clear all',
        selectAll: 'Select all',
        message: {
            success: {
                given: 'Consent successfully given.',
                withdrawn: 'Consent successfully withdrawn.',
            },
        },
    },
    myCoupons: {
        noCouponsMessage: 'You have no coupons available.',
        effectiveTitle: 'Effective:',
        Effective: 'EFFECTIVE',
        PreSession: 'EFFECTIVE SOON',
        ExpireSoon: 'EXPIRING SOON',
        readMore: 'Read more',
        notification: 'Notification',
        findProducts: 'Find Products',
        status: 'Status:',
        dialogTitle: 'Coupon',
        claimCustomerCoupon: 'You have successfully claimed this coupon.',
        myCoupons: 'My coupons',
        startDateAsc: 'Start Date (ascending)',
        startDateDesc: 'Start Date (descending)',
        endDateAsc: 'End Date (ascending)',
        endDateDesc: 'End Date (descending)',
        sortByMostRecent: 'Sort by Most recent',
        notesPreffix: 'You can set your preferred channels for receiving coupon notifications on the ',
        notesLink: 'Notification Channels',
        notesSuffix: ' page.',
    },
    notificationPreference: {
        message: 'Select your preferred notification channels',
        note: 'Note: ',
        noteMessage: 'If you deactivate all channels you will not be able to receive any further notifications.',
        EMAIL: 'Email:',
        SMS: 'SMS:',
        SITE_MESSAGE: 'SiteMessage',
    },
    myInterests: {
        header: 'My Interests',
        item: 'ITEM',
        price: 'PRICE',
        notifications: 'NOTIFICATIONS',
        noInterests: 'You have no registered interests yet.',
        inStock: 'In Stock',
        lowStock: 'Low Stock',
        outOfStock: 'Out of Stock',
        BACK_IN_STOCK: 'Back In Stock',
        sortByMostRecent: 'Sort by Most recent',
        expirationDate: ' - Till {{ expirationDate }}',
        productId: 'ID {{ code }}',
        remove: 'REMOVE',
        sorting: {
            byNameAsc: 'Name (ascending)',
            byNameDesc: 'Name (descending)',
        },
    },
    AccountOrderHistoryTabContainer: {
        tabs: {
            AccountOrderHistoryComponent: 'ALL ORDERS ({{param}})',
            OrderReturnRequestListComponent: 'RETURNS ({{param}})',
        },
    },
    returnRequestList: {
        returnRequestId: 'Return #',
        orderId: 'Order #',
        date: 'Date Created',
        status: 'Status',
        sortByMostRecent: 'Sort by Most recent',
        statusDisplay_APPROVAL_PENDING: 'Approval Pending',
        statusDisplay_CANCELED: 'Cancelled',
        statusDisplay_CANCELLING: 'Cancelling',
        statusDisplay_WAIT: 'Wait',
        statusDisplay_RECEIVED: 'Received',
        statusDisplay_RECEIVING: 'Receiving',
        statusDisplay_APPROVING: 'Approving',
        statusDisplay_REVERSING_PAYMENT: 'Reversing Payment',
        statusDisplay_PAYMENT_REVERSED: 'Payment Reversed',
        statusDisplay_PAYMENT_REVERSAL_FAILED: 'Payment Reversal Failed',
        statusDisplay_REVERSING_TAX: 'Reversing Tax',
        statusDisplay_TAX_REVERSED: 'Tax Reversed',
        statusDisplay_TAX_REVERSAL_FAILED: 'Tax Reversal Failed',
        statusDisplay_COMPLETED: 'Completed',
    },
    returnRequest: {
        returnRequestId: 'Return Request #',
        orderCode: 'For Order #',
        status: 'Return status',
        cancel: 'Cancel Return Request',
        item: 'Description',
        itemPrice: 'Item Price',
        returnQty: 'Return Quantity',
        total: 'Total',
        summary: 'Return Totals',
        subtotal: 'Subtotal',
        deliveryCode: 'Delivery cost',
        estimatedRefund: 'Estimated refund',
        note: 'The totals are estimated and may not include applicable taxes or other charges.',
        cancelSuccess: 'Your return request ({{rma}}) was cancelled',
    },
    wishlist: {
        empty: 'No products in your wish list yet',
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktYWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fzc2V0cy9zcmMvdHJhbnNsYXRpb25zL2VuL215LWFjY291bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFHO0lBQ3ZCLFlBQVksRUFBRTtRQUNaLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLGVBQWUsRUFBRSxrQkFBa0I7UUFDbkMsb0JBQW9CLEVBQUUsTUFBTTtRQUM1QixJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLElBQUksRUFBRSxNQUFNO1FBQ1osVUFBVSxFQUFFLGFBQWE7UUFDekIsaUJBQWlCLEVBQUUsb0JBQW9CO1FBQ3ZDLHNCQUFzQixFQUFFLG1DQUFtQztRQUMzRCxZQUFZLEVBQUUsZ0JBQWdCO1FBQzlCLGdCQUFnQixFQUFFLHVCQUF1QjtRQUN6QyxNQUFNLEVBQUUsUUFBUTtRQUNoQixTQUFTLEVBQUUsWUFBWTtRQUN2Qix5QkFBeUIsRUFBRSxZQUFZO1FBQ3ZDLCtCQUErQixFQUFFLGtCQUFrQjtRQUNuRCxpQ0FBaUMsRUFBRSxvQkFBb0I7UUFDdkQsc0JBQXNCLEVBQUUsU0FBUztRQUNqQyx5QkFBeUIsRUFBRSxZQUFZO1FBQ3ZDLHVCQUF1QixFQUFFLHdCQUF3QjtRQUNqRCw4QkFBOEIsRUFBRSxpQkFBaUI7UUFDakQsaUNBQWlDLEVBQUUsbUJBQW1CO1FBQ3RELG1DQUFtQyxFQUFFLGVBQWU7UUFDcEQsb0JBQW9CLEVBQUUsWUFBWTtRQUNsQyxnQ0FBZ0MsRUFBRSxtQkFBbUI7UUFDckQsc0JBQXNCLEVBQUUsU0FBUztRQUNqQyxnQ0FBZ0MsRUFBRSxXQUFXO1FBQzdDLHdCQUF3QixFQUFFLFdBQVc7UUFDckMsdUJBQXVCLEVBQUUsV0FBVztRQUNwQyx3QkFBd0IsRUFBRSxnQkFBZ0I7UUFDMUMs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ICAgIG9yZGVySWQ6ICdPcmRlciAjJyxcbiAgICBwdXJjaGFzZU9yZGVySWQ6ICdQdXJjaGFzZSBPcmRlciAjJyxcbiAgICBlbXB0eVB1cmNoYXNlT3JkZXJJZDogJ05vbmUnLFxuICAgIG5vbmU6ICdOb25lIHt7dmFsdWV9fScsXG4gICAgcGxhY2VkOiAnUGxhY2VkJyxcbiAgICBwbGFjZWRCeTogJ1BsYWNlZCBCeScsXG4gICAgdW5pdDogJ1VuaXQnLFxuICAgIGNvc3RDZW50ZXI6ICdDb3N0IENlbnRlcicsXG4gICAgY29zdENlbnRlckFuZFVuaXQ6ICdDb3N0IENlbnRlciAvIFVuaXQnLFxuICAgIGNvc3RDZW50ZXJBbmRVbml0VmFsdWU6ICd7e2Nvc3RDZW50ZXJOYW1lfX0gLyB7e3VuaXROYW1lfX0nLFxuICAgIHBheUJ5QWNjb3VudDogJ1BheSBieSBBY2NvdW50JyxcbiAgICBwYWlkQnlDcmVkaXRDYXJkOiAnKHBhaWQgYnkgY3JlZGl0IGNhcmQpJyxcbiAgICBzdGF0dXM6ICdTdGF0dXMnLFxuICAgIHNoaXBwZWRPbjogJ1NoaXBwZWQgb24nLFxuICAgIGRlbGl2ZXJ5U3RhdHVzX0lOX1RSQU5TSVQ6ICdJbiBUcmFuc2l0JyxcbiAgICBkZWxpdmVyeVN0YXR1c19SRUFEWV9GT1JfUElDS1VQOiAnUmVhZHkgZm9yIFBpY2t1cCcsXG4gICAgZGVsaXZlcnlTdGF0dXNfUkVBRFlfRk9SX1NISVBQSU5HOiAnUmVhZHkgZm9yIFNoaXBwaW5nJyxcbiAgICBkZWxpdmVyeVN0YXR1c19XQUlUSU5HOiAnV2FpdGluZycsXG4gICAgZGVsaXZlcnlTdGF0dXNfREVMSVZFUklORzogJ0RlbGl2ZXJpbmcnLFxuICAgIGRlbGl2ZXJ5U3RhdHVzX1BJQ0tQQUNLOiAnUHJlcGFyaW5nIGZvciBTaGlwbWVudCcsXG4gICAgZGVsaXZlcnlTdGF0dXNfUElDS1VQX0NPTVBMRVRFOiAnUGlja3VwIENvbXBsZXRlJyxcbiAgICBkZWxpdmVyeVN0YXR1c19ERUxJVkVSWV9DT01QTEVURUQ6ICdEZWxpdmVyeSBDb21wbGV0ZScsXG4gICAgZGVsaXZlcnlTdGF0dXNfUEFZTUVOVF9OT1RfQ0FQVFVSRUQ6ICdQYXltZW50IElzc3VlJyxcbiAgICBkZWxpdmVyeVN0YXR1c19SRUFEWTogJ0luIFByb2Nlc3MnLFxuICAgIGRlbGl2ZXJ5U3RhdHVzX0RFTElWRVJZX1JFSkVDVEVEOiAnRGVsaXZlcnkgUmVqZWN0ZWQnLFxuICAgIGRlbGl2ZXJ5U3RhdHVzX1NISVBQRUQ6ICdTaGlwcGVkJyxcbiAgICBkZWxpdmVyeVN0YXR1c19UQVhfTk9UX0NPTU1JVFRFRDogJ1RheCBJc3N1ZScsXG4gICAgZGVsaXZlcnlTdGF0dXNfQ0FOQ0VMTEVEOiAnQ2FuY2VsbGVkJyxcbiAgICBzdGF0dXNEaXNwbGF5X2NhbmNlbGxlZDogJ0NhbmNlbGxlZCcsXG4gICAgc3RhdHVzRGlzcGxheV9jYW5jZWxsaW5nOiAnQ2FuY2VsIFBlbmRpbmcnLFxuICAgIHN0YXR1c0Rpc3BsYXlfY29tcGxldGVkOiAnQ29tcGxldGVkJyxcbiAgICBzdGF0dXNEaXNwbGF5X2NyZWF0ZWQ6ICdDcmVhdGVkJyxcbiAgICBzdGF0dXNEaXNwbGF5X2Vycm9yOiAnUGVuZGluZycsXG4gICAgc3RhdHVzRGlzcGxheV9FcnJvcjogJ1BlbmRpbmcnLFxuICAgIHN0YXR1c0Rpc3BsYXlfcHJvY2Vzc2luZzogJ1BlbmRpbmcnLFxuICAgIHN0YXR1c0Rpc3BsYXlfb3BlbjogJ09wZW4nLFxuICAgIHN0YXR1c0Rpc3BsYXlfcGVuZGluZzoge1xuICAgICAgYXBwcm92YWw6ICdQZW5kaW5nIEFwcHJvdmFsJyxcbiAgICAgIG1lcmNoYW50OiB7XG4gICAgICAgIGFwcHJvdmFsOiAnUGVuZGluZyBNZXJjaGFudCBBcHByb3ZhbCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgc3RhdHVzRGlzcGxheV9hcHByb3ZlZDogJ0FwcHJvdmVkJyxcbiAgICBzdGF0dXNEaXNwbGF5X3JlamVjdGVkOiAnUmVqZWN0ZWQnLFxuICAgIHN0YXR1c0Rpc3BsYXlfbWVyY2hhbnQ6IHtcbiAgICAgIGFwcHJvdmVkOiAnTWVyY2hhbnQgQXBwcm92ZWQnLFxuICAgICAgcmVqZWN0ZWQ6ICdNZXJjaGFudCBSZWplY3RlZCcsXG4gICAgfSxcbiAgICBzdGF0dXNEaXNwbGF5X2Fzc2lnbmVkOiB7XG4gICAgICBhZG1pbjogJ0Fzc2lnbmVkIFRvIEFkbWluaXN0cmF0b3InLFxuICAgIH0sXG4gICAgY29uc2lnbm1lbnRUcmFja2luZzoge1xuICAgICAgYWN0aW9uOiAnVHJhY2sgcGFja2FnZScsXG4gICAgICBkaWFsb2c6IHtcbiAgICAgICAgaGVhZGVyOiAnVHJhY2tpbmcgSW5mb3JtYXRpb24nLFxuICAgICAgICBzaGlwcGVkOiAnU2hpcHBlZCcsXG4gICAgICAgIGVzdGltYXRlOiAnRXN0aW1hdGVkIERlbGl2ZXJ5JyxcbiAgICAgICAgY2FycmllcjogJ0RlbGl2ZXJ5IFNlcnZpY2UnLFxuICAgICAgICB0cmFja2luZ0lkOiAnVHJhY2tpbmcgTnVtYmVyJyxcbiAgICAgICAgbm9UcmFja2luZzpcbiAgICAgICAgICAnVGhlIHBhY2thZ2UgaGFzIG5vdCBiZWVuIGRpc3BhdGNoZWQgZnJvbSB0aGUgd2FyZWhvdXNlLiBUaGUgdHJhY2tpbmcgaW5mb3JtYXRpb24gd2lsbCBiZSBhdmFpbGFibGUgYWZ0ZXIgdGhlIHBhY2thZ2UgaXMgc2hpcHBlZC4nLFxuICAgICAgICBsb2FkaW5nSGVhZGVyOiAnQ29uc2lnbm1lbnQgVHJhY2tpbmcnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNhbmNlbGxhdGlvbkFuZFJldHVybjoge1xuICAgICAgcmV0dXJuQWN0aW9uOiAnUmVxdWVzdCBhIFJldHVybicsXG4gICAgICBjYW5jZWxBY3Rpb246ICdDYW5jZWwgSXRlbXMnLFxuICAgICAgaXRlbTogJ0l0ZW0nLFxuICAgICAgaXRlbVByaWNlOiAnSXRlbSBQcmljZScsXG4gICAgICBxdWFudGl0eTogJ01heCBRdWFudGl0eScsXG4gICAgICByZXR1cm5RdHk6ICdRdWFudGl0eSB0byBSZXR1cm4nLFxuICAgICAgY2FuY2VsUXR5OiAnUXVhbnRpdHkgdG8gQ2FuY2VsJyxcbiAgICAgIHNldEFsbDogJ1NldCBhbGwgcXVhbnRpdGllcyB0byBtYXhpbXVtJyxcbiAgICAgIHRvdGFsUHJpY2U6ICdUb3RhbCcsXG4gICAgICBzdWJtaXQ6ICdTdWJtaXQgUmVxdWVzdCcsXG4gICAgICByZXR1cm5TdWNjZXNzOiAnWW91ciByZXR1cm4gcmVxdWVzdCAoe3tybWF9fSkgd2FzIHN1Ym1pdHRlZCcsXG4gICAgICBjYW5jZWxTdWNjZXNzOlxuICAgICAgICAnWW91ciBjYW5jZWxsYXRpb24gcmVxdWVzdCB3YXMgc3VibWl0dGVkIChvcmlnaW5hbCBvcmRlciB7e29yZGVyQ29kZX19IHdpbGwgYmUgdXBkYXRlZCknLFxuICAgIH0sXG4gICAgYXBwcm92YWxEZXRhaWxzOiB7XG4gICAgICBoZWFkZXI6ICdDdXN0b21lciBBcHByb3ZhbCBEZXRhaWxzJyxcbiAgICAgIHBlcm1pc3Npb246ICdQZXJtaXNzaW9uJyxcbiAgICAgIGFwcHJvdmVyOiAnQXBwcm92ZXInLFxuICAgICAgc3RhdHVzOiAnU3RhdHVzJyxcbiAgICAgIGFwcHJvdmVyQ29tbWVudHM6ICdBcHByb3ZlciBDb21tZW50cycsXG4gICAgICBub0FwcHJvdmFsTm90ZXM6ICdOb25lJyxcbiAgICAgIHBlcm1pc3Npb25UeXBlX0IyQkJ1ZGdldEV4Y2VlZGVkUGVybWlzc2lvbjpcbiAgICAgICAgJ1RoZSBidWRnZXQgYXNzb2NpYXRlZCB3aXRoIGNob3NlbiBjb3N0IGNlbnRlciBoYXMgYmVlbiBleGNlZWRlZCcsXG4gICAgICBwZXJtaXNzaW9uVHlwZV9CMkJPcmRlclRocmVzaG9sZFBlcm1pc3Npb246XG4gICAgICAgICdPcmRlciB0b3RhbCBleGNlZWRlZCBwZXItb3JkZXIgbGltaXQnLFxuICAgICAgcGVybWlzc2lvblR5cGVfQjJCT3JkZXJUaHJlc2hvbGRUaW1lc3BhblBlcm1pc3Npb246XG4gICAgICAgICdPcmRlciB0b3RhbCBleGNlZWRlZCBwZXItdGltZXNwYW4gbGltaXQnLFxuICAgIH0sXG4gIH0sXG4gIG9yZGVySGlzdG9yeToge1xuICAgIG9yZGVySGlzdG9yeTogJ09yZGVyIGhpc3RvcnknLFxuICAgIG9yZGVySWQ6ICdPcmRlciAjJyxcbiAgICBkYXRlOiAnRGF0ZScsXG4gICAgc3RhdHVzOiAnU3RhdHVzJyxcbiAgICB0b3RhbDogJ1RvdGFsJyxcbiAgICBub09yZGVyczogJ1dlIGhhdmUgbm8gb3JkZXIgcmVjb3JkcyBmb3IgdGhpcyBhY2NvdW50LicsXG4gICAgc3RhcnRTaG9wcGluZzogJ1N0YXJ0IFNob3BwaW5nJyxcbiAgICBzb3J0QnlNb3N0UmVjZW50OiAnU29ydCBieSBNb3N0IHJlY2VudCcsXG4gIH0sXG4gIGNsb3NlQWNjb3VudDoge1xuICAgIGNvbmZpcm1BY2NvdW50Q2xvc3VyZTogJ0NvbmZpcm0gQWNjb3VudCBDbG9zdXJlJyxcbiAgICBjb25maXJtQWNjb3VudENsb3N1cmVNZXNzYWdlOlxuICAgICAgJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjbG9zZSB5b3VyIGFjY291bnQ/JyxcbiAgICBjbG9zZU15QWNjb3VudDogJ0NMT1NFIE1ZIEFDQ09VTlQnLFxuICAgIGFjY291bnRDbG9zZWRTdWNjZXNzZnVsbHk6ICdBY2NvdW50IGNsb3NlZCB3aXRoIHN1Y2Nlc3MnLFxuICAgIGFjY291bnRDbG9zZWRGYWlsdXJlOiAnRmFpbGVkIHRvIGNsb3NlIGFjY291bnQnLFxuICB9LFxuICB1cGRhdGVFbWFpbEZvcm06IHtcbiAgICBuZXdFbWFpbEFkZHJlc3M6IHtcbiAgICAgIGxhYmVsOiAnTmV3IGVtYWlsIGFkZHJlc3MnLFxuICAgICAgcGxhY2Vob2xkZXI6ICdFbnRlciBlbWFpbCcsXG4gICAgfSxcbiAgICBjb25maXJtTmV3RW1haWxBZGRyZXNzOiB7XG4gICAgICBsYWJlbDogJ0NvbmZpcm0gbmV3IGVtYWlsIGFkZHJlc3MnLFxuICAgICAgcGxhY2Vob2xkZXI6ICdFbnRlciBlbWFpbCcsXG4gICAgfSxcbiAgICBlbnRlclZhbGlkRW1haWw6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbC4nLFxuICAgIGJvdGhFbWFpbE11c3RNYXRjaDogJ0JvdGggZW1haWxzIG11c3QgbWF0Y2gnLFxuICAgIHBhc3N3b3JkOiB7XG4gICAgICBsYWJlbDogJ1Bhc3N3b3JkJyxcbiAgICAgIHBsYWNlaG9sZGVyOiAnRW50ZXIgcGFzc3dvcmQnLFxuICAgIH0sXG4gICAgcGxlYXNlSW5wdXRQYXNzd29yZDogJ1BsZWFzZSBpbnB1dCBwYXNzd29yZCcsXG4gICAgZW1haWxVcGRhdGVTdWNjZXNzOiAnU3VjY2Vzcy4gUGxlYXNlIHNpZ24gaW4gd2l0aCB7eyBuZXdVaWQgfX0nLFxuICB9LFxuICB1cGRhdGVQYXNzd29yZEZvcm06IHtcbiAgICBvbGRQYXNzd29yZDoge1xuICAgICAgbGFiZWw6ICdPbGQgUGFzc3dvcmQnLFxuICAgICAgcGxhY2Vob2xkZXI6ICdPbGQgUGFzc3dvcmQnLFxuICAgIH0sXG4gICAgb2xkUGFzc3dvcmRJc1JlcXVpcmVkOiAnT2xkIHBhc3N3b3JkIGlzIHJlcXVpcmVkLicsXG4gICAgbmV3UGFzc3dvcmQ6IHtcbiAgICAgIGxhYmVsOiAnTmV3IFBhc3N3b3JkJyxcbiAgICAgIHBsYWNlaG9sZGVyOiAnTmV3IFBhc3N3b3JkJyxcbiAgICB9LFxuICAgIHBhc3N3b3JkTWluUmVxdWlyZW1lbnRzOlxuICAgICAgJ1Bhc3N3b3JkIG11c3QgYmUgc2l4IGNoYXJhY3RlcnMgbWluaW11bSwgd2l0aCBvbmUgdXBwZXJjYXNlIGxldHRlciwgb25lIG51bWJlciwgb25lIHN5bWJvbCcsXG4gICAgY29uZmlybVBhc3N3b3JkOiB7XG4gICAgICBsYWJlbDogJ0NvbmZpcm0gTmV3IFBhc3N3b3JkJyxcbiAgICAgIHBsYWNlaG9sZGVyOiAnQ29uZmlybSBQYXNzd29yZCcsXG4gICAgfSxcbiAgICBib3RoUGFzc3dvcmRNdXN0TWF0Y2g6ICdCb3RoIHBhc3N3b3JkIG11c3QgbWF0Y2gnLFxuICAgIHBhc3N3b3JkVXBkYXRlU3VjY2VzczogJ1Bhc3N3b3JkIHVwZGF0ZWQgd2l0aCBzdWNjZXNzJyxcbiAgfSxcbiAgdXBkYXRlUHJvZmlsZUZvcm06IHtcbiAgICB0aXRsZTogJycsXG4gICAgbm9uZTogJycsXG4gICAgZmlyc3ROYW1lOiB7XG4gICAgICBsYWJlbDogJ0ZpcnN0IG5hbWUnLFxuICAgICAgcGxhY2Vob2xkZXI6ICdGaXJzdCBuYW1lJyxcbiAgICB9LFxuICAgIGZpcnN0TmFtZUlzUmVxdWlyZWQ6ICdGaXJzdCBuYW1lIGlzIHJlcXVpcmVkLicsXG4gICAgbGFzdE5hbWU6IHtcbiAgICAgIGxhYmVsOiAnTGFzdCBuYW1lJyxcbiAgICAgIHBsYWNlaG9sZGVyOiAnTGFzdCBuYW1lJyxcbiAgICB9LFxuICAgIGxhc3ROYW1lSXNSZXF1aXJlZDogJ0xhc3QgbmFtZSBpcyByZXF1aXJlZC4nLFxuICAgIHByb2ZpbGVVcGRhdGVTdWNjZXNzOiAnUGVyc29uYWwgZGV0YWlscyBzdWNjZXNzZnVsbHkgdXBkYXRlZCcsXG4gIH0sXG4gIGNvbnNlbnRNYW5hZ2VtZW50Rm9ybToge1xuICAgIGNsZWFyQWxsOiAnQ2xlYXIgYWxsJyxcbiAgICBzZWxlY3RBbGw6ICdTZWxlY3QgYWxsJyxcbiAgICBtZXNzYWdlOiB7XG4gICAgICBzdWNjZXNzOiB7XG4gICAgICAgIGdpdmVuOiAnQ29uc2VudCBzdWNjZXNzZnVsbHkgZ2l2ZW4uJyxcbiAgICAgICAgd2l0aGRyYXduOiAnQ29uc2VudCBzdWNjZXNzZnVsbHkgd2l0aGRyYXduLicsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIG15Q291cG9uczoge1xuICAgIG5vQ291cG9uc01lc3NhZ2U6ICdZb3UgaGF2ZSBubyBjb3Vwb25zIGF2YWlsYWJsZS4nLFxuICAgIGVmZmVjdGl2ZVRpdGxlOiAnRWZmZWN0aXZlOicsXG4gICAgRWZmZWN0aXZlOiAnRUZGRUNUSVZFJyxcbiAgICBQcmVTZXNzaW9uOiAnRUZGRUNUSVZFIFNPT04nLFxuICAgIEV4cGlyZVNvb246ICdFWFBJUklORyBTT09OJyxcbiAgICByZWFkTW9yZTogJ1JlYWQgbW9yZScsXG4gICAgbm90aWZpY2F0aW9uOiAnTm90aWZpY2F0aW9uJyxcbiAgICBmaW5kUHJvZHVjdHM6ICdGaW5kIFByb2R1Y3RzJyxcbiAgICBzdGF0dXM6ICdTdGF0dXM6JyxcbiAgICBkaWFsb2dUaXRsZTogJ0NvdXBvbicsXG4gICAgY2xhaW1DdXN0b21lckNvdXBvbjogJ1lvdSBoYXZlIHN1Y2Nlc3NmdWxseSBjbGFpbWVkIHRoaXMgY291cG9uLicsXG4gICAgbXlDb3Vwb25zOiAnTXkgY291cG9ucycsXG4gICAgc3RhcnREYXRlQXNjOiAnU3RhcnQgRGF0ZSAoYXNjZW5kaW5nKScsXG4gICAgc3RhcnREYXRlRGVzYzogJ1N0YXJ0IERhdGUgKGRlc2NlbmRpbmcpJyxcbiAgICBlbmREYXRlQXNjOiAnRW5kIERhdGUgKGFzY2VuZGluZyknLFxuICAgIGVuZERhdGVEZXNjOiAnRW5kIERhdGUgKGRlc2NlbmRpbmcpJyxcbiAgICBzb3J0QnlNb3N0UmVjZW50OiAnU29ydCBieSBNb3N0IHJlY2VudCcsXG4gICAgbm90ZXNQcmVmZml4OlxuICAgICAgJ1lvdSBjYW4gc2V0IHlvdXIgcHJlZmVycmVkIGNoYW5uZWxzIGZvciByZWNlaXZpbmcgY291cG9uIG5vdGlmaWNhdGlvbnMgb24gdGhlICcsXG4gICAgbm90ZXNMaW5rOiAnTm90aWZpY2F0aW9uIENoYW5uZWxzJyxcbiAgICBub3Rlc1N1ZmZpeDogJyBwYWdlLicsXG4gIH0sXG4gIG5vdGlmaWNhdGlvblByZWZlcmVuY2U6IHtcbiAgICBtZXNzYWdlOiAnU2VsZWN0IHlvdXIgcHJlZmVycmVkIG5vdGlmaWNhdGlvbiBjaGFubmVscycsXG4gICAgbm90ZTogJ05vdGU6ICcsXG4gICAgbm90ZU1lc3NhZ2U6XG4gICAgICAnSWYgeW91IGRlYWN0aXZhdGUgYWxsIGNoYW5uZWxzIHlvdSB3aWxsIG5vdCBiZSBhYmxlIHRvIHJlY2VpdmUgYW55IGZ1cnRoZXIgbm90aWZpY2F0aW9ucy4nLFxuICAgIEVNQUlMOiAnRW1haWw6JyxcbiAgICBTTVM6ICdTTVM6JyxcbiAgICBTSVRFX01FU1NBR0U6ICdTaXRlTWVzc2FnZScsXG4gIH0sXG4gIG15SW50ZXJlc3RzOiB7XG4gICAgaGVhZGVyOiAnTXkgSW50ZXJlc3RzJyxcbiAgICBpdGVtOiAnSVRFTScsXG4gICAgcHJpY2U6ICdQUklDRScsXG4gICAgbm90aWZpY2F0aW9uczogJ05PVElGSUNBVElPTlMnLFxuICAgIG5vSW50ZXJlc3RzOiAnWW91IGhhdmUgbm8gcmVnaXN0ZXJlZCBpbnRlcmVzdHMgeWV0LicsXG4gICAgaW5TdG9jazogJ0luIFN0b2NrJyxcbiAgICBsb3dTdG9jazogJ0xvdyBTdG9jaycsXG4gICAgb3V0T2ZTdG9jazogJ091dCBvZiBTdG9jaycsXG4gICAgQkFDS19JTl9TVE9DSzogJ0JhY2sgSW4gU3RvY2snLFxuICAgIHNvcnRCeU1vc3RSZWNlbnQ6ICdTb3J0IGJ5IE1vc3QgcmVjZW50JyxcbiAgICBleHBpcmF0aW9uRGF0ZTogJyAtIFRpbGwge3sgZXhwaXJhdGlvbkRhdGUgfX0nLFxuICAgIHByb2R1Y3RJZDogJ0lEIHt7IGNvZGUgfX0nLFxuICAgIHJlbW92ZTogJ1JFTU9WRScsXG4gICAgc29ydGluZzoge1xuICAgICAgYnlOYW1lQXNjOiAnTmFtZSAoYXNjZW5kaW5nKScsXG4gICAgICBieU5hbWVEZXNjOiAnTmFtZSAoZGVzY2VuZGluZyknLFxuICAgIH0sXG4gIH0sXG4gIEFjY291bnRPcmRlckhpc3RvcnlUYWJDb250YWluZXI6IHtcbiAgICB0YWJzOiB7XG4gICAgICBBY2NvdW50T3JkZXJIaXN0b3J5Q29tcG9uZW50OiAnQUxMIE9SREVSUyAoe3twYXJhbX19KScsXG4gICAgICBPcmRlclJldHVyblJlcXVlc3RMaXN0Q29tcG9uZW50OiAnUkVUVVJOUyAoe3twYXJhbX19KScsXG4gICAgfSxcbiAgfSxcbiAgcmV0dXJuUmVxdWVzdExpc3Q6IHtcbiAgICByZXR1cm5SZXF1ZXN0SWQ6ICdSZXR1cm4gIycsXG4gICAgb3JkZXJJZDogJ09yZGVyICMnLFxuICAgIGRhdGU6ICdEYXRlIENyZWF0ZWQnLFxuICAgIHN0YXR1czogJ1N0YXR1cycsXG4gICAgc29ydEJ5TW9zdFJlY2VudDogJ1NvcnQgYnkgTW9zdCByZWNlbnQnLFxuICAgIHN0YXR1c0Rpc3BsYXlfQVBQUk9WQUxfUEVORElORzogJ0FwcHJvdmFsIFBlbmRpbmcnLFxuICAgIHN0YXR1c0Rpc3BsYXlfQ0FOQ0VMRUQ6ICdDYW5jZWxsZWQnLFxuICAgIHN0YXR1c0Rpc3BsYXlfQ0FOQ0VMTElORzogJ0NhbmNlbGxpbmcnLFxuICAgIHN0YXR1c0Rpc3BsYXlfV0FJVDogJ1dhaXQnLFxuICAgIHN0YXR1c0Rpc3BsYXlfUkVDRUlWRUQ6ICdSZWNlaXZlZCcsXG4gICAgc3RhdHVzRGlzcGxheV9SRUNFSVZJTkc6ICdSZWNlaXZpbmcnLFxuICAgIHN0YXR1c0Rpc3BsYXlfQVBQUk9WSU5HOiAnQXBwcm92aW5nJyxcbiAgICBzdGF0dXNEaXNwbGF5X1JFVkVSU0lOR19QQVlNRU5UOiAnUmV2ZXJzaW5nIFBheW1lbnQnLFxuICAgIHN0YXR1c0Rpc3BsYXlfUEFZTUVOVF9SRVZFUlNFRDogJ1BheW1lbnQgUmV2ZXJzZWQnLFxuICAgIHN0YXR1c0Rpc3BsYXlfUEFZTUVOVF9SRVZFUlNBTF9GQUlMRUQ6ICdQYXltZW50IFJldmVyc2FsIEZhaWxlZCcsXG4gICAgc3RhdHVzRGlzcGxheV9SRVZFUlNJTkdfVEFYOiAnUmV2ZXJzaW5nIFRheCcsXG4gICAgc3RhdHVzRGlzcGxheV9UQVhfUkVWRVJTRUQ6ICdUYXggUmV2ZXJzZWQnLFxuICAgIHN0YXR1c0Rpc3BsYXlfVEFYX1JFVkVSU0FMX0ZBSUxFRDogJ1RheCBSZXZlcnNhbCBGYWlsZWQnLFxuICAgIHN0YXR1c0Rpc3BsYXlfQ09NUExFVEVEOiAnQ29tcGxldGVkJyxcbiAgfSxcbiAgcmV0dXJuUmVxdWVzdDoge1xuICAgIHJldHVyblJlcXVlc3RJZDogJ1JldHVybiBSZXF1ZXN0ICMnLFxuICAgIG9yZGVyQ29kZTogJ0ZvciBPcmRlciAjJyxcbiAgICBzdGF0dXM6ICdSZXR1cm4gc3RhdHVzJyxcbiAgICBjYW5jZWw6ICdDYW5jZWwgUmV0dXJuIFJlcXVlc3QnLFxuICAgIGl0ZW06ICdEZXNjcmlwdGlvbicsXG4gICAgaXRlbVByaWNlOiAnSXRlbSBQcmljZScsXG4gICAgcmV0dXJuUXR5OiAnUmV0dXJuIFF1YW50aXR5JyxcbiAgICB0b3RhbDogJ1RvdGFsJyxcbiAgICBzdW1tYXJ5OiAnUmV0dXJuIFRvdGFscycsXG4gICAgc3VidG90YWw6ICdTdWJ0b3RhbCcsXG4gICAgZGVsaXZlcnlDb2RlOiAnRGVsaXZlcnkgY29zdCcsXG4gICAgZXN0aW1hdGVkUmVmdW5kOiAnRXN0aW1hdGVkIHJlZnVuZCcsXG4gICAgbm90ZTpcbiAgICAgICdUaGUgdG90YWxzIGFyZSBlc3RpbWF0ZWQgYW5kIG1heSBub3QgaW5jbHVkZSBhcHBsaWNhYmxlIHRheGVzIG9yIG90aGVyIGNoYXJnZXMuJyxcbiAgICBjYW5jZWxTdWNjZXNzOiAnWW91ciByZXR1cm4gcmVxdWVzdCAoe3tybWF9fSkgd2FzIGNhbmNlbGxlZCcsXG4gIH0sXG4gIHdpc2hsaXN0OiB7XG4gICAgZW1wdHk6ICdObyBwcm9kdWN0cyBpbiB5b3VyIHdpc2ggbGlzdCB5ZXQnLFxuICB9LFxufTtcbiJdfQ==