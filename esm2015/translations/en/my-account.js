export const myAccount = {
    orderDetails: {
        orderId: 'Order #',
        placed: 'Placed',
        status: 'Status',
        shippedOn: 'Shipped on',
        inProcess: 'In process...',
        pending: 'Pending',
        deliveryStatus_READY_FOR_PICKUP: 'Ready for pickup',
        deliveryStatus_PICKUP_COMPLETE: 'Picked up',
        deliveryStatus_SHIPPED: 'Shipped',
        deliveryStatus_CANCELLED: 'Cancelled',
        statusDisplay_cancelled: 'Cancelled',
        statusDisplay_cancelling: 'Cancel Pending',
        statusDisplay_completed: 'Completed',
        statusDisplay_created: 'Created',
        statusDisplay_error: 'Pending',
        statusDisplay_Error: 'Pending',
        statusDisplay_open: 'Open',
        statusDisplay_processing: 'In Process',
        consignmentTracking: {
            action: 'Track package',
            dialog: {
                header: 'Tracking Information',
                shipped: 'Shipped',
                estimate: 'Estimated Delivery',
                carrier: 'Delivery Service',
                trackingId: 'Tracking Number',
                noTracking: 'The package has not been dispatched from the warehouse. ' +
                    'The tracking information will be available after the package is shipped.',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktYWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvYXNzZXRzLyIsInNvdXJjZXMiOlsidHJhbnNsYXRpb25zL2VuL215LWFjY291bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFHO0lBQ3ZCLFlBQVksRUFBRTtRQUNaLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLFNBQVMsRUFBRSxZQUFZO1FBQ3ZCLFNBQVMsRUFBRSxlQUFlO1FBQzFCLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLCtCQUErQixFQUFFLGtCQUFrQjtRQUNuRCw4QkFBOEIsRUFBRSxXQUFXO1FBQzNDLHNCQUFzQixFQUFFLFNBQVM7UUFDakMsd0JBQXdCLEVBQUUsV0FBVztRQUNyQyx1QkFBdUIsRUFBRSxXQUFXO1FBQ3BDLHdCQUF3QixFQUFFLGdCQUFnQjtRQUMxQyx1QkFBdUIsRUFBRSxXQUFXO1FBQ3BDLHFCQUFxQixFQUFFLFNBQVM7UUFDaEMsbUJBQW1CLEVBQUUsU0FBUztRQUM5QixtQkFBbUIsRUFBRSxTQUFTO1FBQzlCLGtCQUFrQixFQUFFLE1BQU07UUFDMUIsd0JBQXdCLEVBQUUsWUFBWTtRQUN0QyxtQkFBbUIsRUFBRTtZQUNuQixNQUFNLEVBQUUsZUFBZTtZQUN2QixNQUFNLEVBQUU7Z0JBQ04sTUFBTSxFQUFFLHNCQUFzQjtnQkFDOUIsT0FBTyxFQUFFLFNBQVM7Z0JBQ2xCLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLE9BQU8sRUFBRSxrQkFBa0I7Z0JBQzNCLFVBQVUsRUFBRSxpQkFBaUI7Z0JBQzdCLFVBQVUsRUFDUiwwREFBMEQ7b0JBQzFELDBFQUEwRTtnQkFDNUUsYUFBYSxFQUFFLHNCQUFzQjthQUN0QztTQUNGO1FBQ0QscUJBQXFCLEVBQUU7WUFDckIsWUFBWSxFQUFFLGtCQUFrQjtZQUNoQyxZQUFZLEVBQUUsY0FBYztZQUM1QixJQUFJLEVBQUUsTUFBTTtZQUNaLFNBQVMsRUFBRSxZQUFZO1lBQ3ZCLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRSxvQkFBb0I7WUFDL0IsU0FBUyxFQUFFLG9CQUFvQjtZQUMvQixNQUFNLEVBQUUsK0JBQStCO1lBQ3ZDLFVBQVUsRUFBRSxPQUFPO1lBQ25CLE1BQU0sRUFBRSxnQkFBZ0I7WUFDeEIsYUFBYSxFQUFFLDZDQUE2QztZQUM1RCxhQUFhLEVBQ1gsd0ZBQXdGO1NBQzNGO0tBQ0Y7SUFDRCxZQUFZLEVBQUU7UUFDWixZQUFZLEVBQUUsZUFBZTtRQUM3QixPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLEtBQUssRUFBRSxPQUFPO1FBQ2QsUUFBUSxFQUFFLDRDQUE0QztRQUN0RCxhQUFhLEVBQUUsZ0JBQWdCO1FBQy9CLGdCQUFnQixFQUFFLHFCQUFxQjtLQUN4QztJQUNELFlBQVksRUFBRTtRQUNaLHFCQUFxQixFQUFFLHlCQUF5QjtRQUNoRCw0QkFBNEIsRUFDMUIsOENBQThDO1FBQ2hELGNBQWMsRUFBRSxrQkFBa0I7UUFDbEMseUJBQXlCLEVBQUUsNkJBQTZCO1FBQ3hELG9CQUFvQixFQUFFLHlCQUF5QjtLQUNoRDtJQUNELGVBQWUsRUFBRTtRQUNmLGVBQWUsRUFBRTtZQUNmLEtBQUssRUFBRSxtQkFBbUI7WUFDMUIsV0FBVyxFQUFFLGFBQWE7U0FDM0I7UUFDRCxzQkFBc0IsRUFBRTtZQUN0QixLQUFLLEVBQUUsMkJBQTJCO1lBQ2xDLFdBQVcsRUFBRSxhQUFhO1NBQzNCO1FBQ0QsZUFBZSxFQUFFLDZCQUE2QjtRQUM5QyxrQkFBa0IsRUFBRSx3QkFBd0I7UUFDNUMsUUFBUSxFQUFFO1lBQ1IsS0FBSyxFQUFFLFVBQVU7WUFDakIsV0FBVyxFQUFFLGdCQUFnQjtTQUM5QjtRQUNELG1CQUFtQixFQUFFLHVCQUF1QjtRQUM1QyxrQkFBa0IsRUFBRSwyQ0FBMkM7S0FDaEU7SUFDRCxrQkFBa0IsRUFBRTtRQUNsQixXQUFXLEVBQUU7WUFDWCxLQUFLLEVBQUUsY0FBYztZQUNyQixXQUFXLEVBQUUsY0FBYztTQUM1QjtRQUNELHFCQUFxQixFQUFFLDJCQUEyQjtRQUNsRCxXQUFXLEVBQUU7WUFDWCxLQUFLLEVBQUUsY0FBYztZQUNyQixXQUFXLEVBQUUsY0FBYztTQUM1QjtRQUNELHVCQUF1QixFQUNyQiw0RkFBNEY7UUFDOUYsZUFBZSxFQUFFO1lBQ2YsS0FBSyxFQUFFLHNCQUFzQjtZQUM3QixXQUFXLEVBQUUsa0JBQWtCO1NBQ2hDO1FBQ0QscUJBQXFCLEVBQUUsMEJBQTBCO1FBQ2pELHFCQUFxQixFQUFFLCtCQUErQjtLQUN2RDtJQUNELGlCQUFpQixFQUFFO1FBQ2pCLEtBQUssRUFBRSxFQUFFO1FBQ1QsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUU7WUFDVCxLQUFLLEVBQUUsWUFBWTtZQUNuQixXQUFXLEVBQUUsWUFBWTtTQUMxQjtRQUNELG1CQUFtQixFQUFFLHlCQUF5QjtRQUM5QyxRQUFRLEVBQUU7WUFDUixLQUFLLEVBQUUsV0FBVztZQUNsQixXQUFXLEVBQUUsV0FBVztTQUN6QjtRQUNELGtCQUFrQixFQUFFLHdCQUF3QjtRQUM1QyxvQkFBb0IsRUFBRSx1Q0FBdUM7S0FDOUQ7SUFDRCxxQkFBcUIsRUFBRTtRQUNyQixRQUFRLEVBQUUsV0FBVztRQUNyQixTQUFTLEVBQUUsWUFBWTtRQUN2QixPQUFPLEVBQUU7WUFDUCxPQUFPLEVBQUU7Z0JBQ1AsS0FBSyxFQUFFLDZCQUE2QjtnQkFDcEMsU0FBUyxFQUFFLGlDQUFpQzthQUM3QztTQUNGO0tBQ0Y7SUFDRCxTQUFTLEVBQUU7UUFDVCxnQkFBZ0IsRUFBRSxnQ0FBZ0M7UUFDbEQsY0FBYyxFQUFFLFlBQVk7UUFDNUIsU0FBUyxFQUFFLFdBQVc7UUFDdEIsVUFBVSxFQUFFLGdCQUFnQjtRQUM1QixVQUFVLEVBQUUsZUFBZTtRQUMzQixRQUFRLEVBQUUsV0FBVztRQUNyQixZQUFZLEVBQUUsY0FBYztRQUM1QixZQUFZLEVBQUUsZUFBZTtRQUM3QixNQUFNLEVBQUUsU0FBUztRQUNqQixXQUFXLEVBQUUsUUFBUTtRQUNyQixtQkFBbUIsRUFBRSw0Q0FBNEM7UUFDakUsU0FBUyxFQUFFLFlBQVk7UUFDdkIsWUFBWSxFQUFFLHdCQUF3QjtRQUN0QyxhQUFhLEVBQUUseUJBQXlCO1FBQ3hDLFVBQVUsRUFBRSxzQkFBc0I7UUFDbEMsV0FBVyxFQUFFLHVCQUF1QjtRQUNwQyxnQkFBZ0IsRUFBRSxxQkFBcUI7UUFDdkMsWUFBWSxFQUNWLGdGQUFnRjtRQUNsRixTQUFTLEVBQUUsdUJBQXVCO1FBQ2xDLFdBQVcsRUFBRSxRQUFRO0tBQ3RCO0lBQ0Qsc0JBQXNCLEVBQUU7UUFDdEIsT0FBTyxFQUFFLDZDQUE2QztRQUN0RCxJQUFJLEVBQUUsUUFBUTtRQUNkLFdBQVcsRUFDVCwyRkFBMkY7UUFDN0YsS0FBSyxFQUFFLFFBQVE7UUFDZixHQUFHLEVBQUUsTUFBTTtRQUNYLFlBQVksRUFBRSxhQUFhO0tBQzVCO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsTUFBTSxFQUFFLGNBQWM7UUFDdEIsSUFBSSxFQUFFLE1BQU07UUFDWixLQUFLLEVBQUUsT0FBTztRQUNkLGFBQWEsRUFBRSxlQUFlO1FBQzlCLFdBQVcsRUFBRSx1Q0FBdUM7UUFDcEQsT0FBTyxFQUFFLFVBQVU7UUFDbkIsUUFBUSxFQUFFLFdBQVc7UUFDckIsVUFBVSxFQUFFLGNBQWM7UUFDMUIsYUFBYSxFQUFFLGVBQWU7UUFDOUIsZ0JBQWdCLEVBQUUscUJBQXFCO1FBQ3ZDLGNBQWMsRUFBRSw4QkFBOEI7UUFDOUMsU0FBUyxFQUFFLGVBQWU7UUFDMUIsTUFBTSxFQUFFLFFBQVE7UUFDaEIsT0FBTyxFQUFFO1lBQ1AsU0FBUyxFQUFFLGtCQUFrQjtZQUM3QixVQUFVLEVBQUUsbUJBQW1CO1NBQ2hDO0tBQ0Y7SUFDRCwrQkFBK0IsRUFBRTtRQUMvQixJQUFJLEVBQUU7WUFDSiw0QkFBNEIsRUFBRSx3QkFBd0I7WUFDdEQsK0JBQStCLEVBQUUscUJBQXFCO1NBQ3ZEO0tBQ0Y7SUFDRCxpQkFBaUIsRUFBRTtRQUNqQixlQUFlLEVBQUUsVUFBVTtRQUMzQixPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsY0FBYztRQUNwQixNQUFNLEVBQUUsUUFBUTtRQUNoQixnQkFBZ0IsRUFBRSxxQkFBcUI7UUFDdkMsOEJBQThCLEVBQUUsa0JBQWtCO1FBQ2xELHNCQUFzQixFQUFFLFdBQVc7UUFDbkMsd0JBQXdCLEVBQUUsWUFBWTtRQUN0QyxrQkFBa0IsRUFBRSxNQUFNO1FBQzFCLHNCQUFzQixFQUFFLFVBQVU7UUFDbEMsdUJBQXVCLEVBQUUsV0FBVztRQUNwQyx1QkFBdUIsRUFBRSxXQUFXO1FBQ3BDLCtCQUErQixFQUFFLG1CQUFtQjtRQUNwRCw4QkFBOEIsRUFBRSxrQkFBa0I7UUFDbEQscUNBQXFDLEVBQUUseUJBQXlCO1FBQ2hFLDJCQUEyQixFQUFFLGVBQWU7UUFDNUMsMEJBQTBCLEVBQUUsY0FBYztRQUMxQyxpQ0FBaUMsRUFBRSxxQkFBcUI7UUFDeEQsdUJBQXVCLEVBQUUsV0FBVztLQUNyQztJQUNELGFBQWEsRUFBRTtRQUNiLGVBQWUsRUFBRSxrQkFBa0I7UUFDbkMsU0FBUyxFQUFFLGFBQWE7UUFDeEIsTUFBTSxFQUFFLGVBQWU7UUFDdkIsTUFBTSxFQUFFLHVCQUF1QjtRQUMvQixJQUFJLEVBQUUsYUFBYTtRQUNuQixTQUFTLEVBQUUsWUFBWTtRQUN2QixTQUFTLEVBQUUsaUJBQWlCO1FBQzVCLEtBQUssRUFBRSxPQUFPO1FBQ2QsT0FBTyxFQUFFLGVBQWU7UUFDeEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsWUFBWSxFQUFFLGVBQWU7UUFDN0IsZUFBZSxFQUFFLGtCQUFrQjtRQUNuQyxJQUFJLEVBQ0YsaUZBQWlGO1FBQ25GLGFBQWEsRUFBRSw2Q0FBNkM7S0FDN0Q7SUFDRCxRQUFRLEVBQUU7UUFDUixLQUFLLEVBQUUsbUNBQW1DO0tBQzNDO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBteUFjY291bnQgPSB7XG4gIG9yZGVyRGV0YWlsczoge1xuICAgIG9yZGVySWQ6ICdPcmRlciAjJyxcbiAgICBwbGFjZWQ6ICdQbGFjZWQnLFxuICAgIHN0YXR1czogJ1N0YXR1cycsXG4gICAgc2hpcHBlZE9uOiAnU2hpcHBlZCBvbicsXG4gICAgaW5Qcm9jZXNzOiAnSW4gcHJvY2Vzcy4uLicsXG4gICAgcGVuZGluZzogJ1BlbmRpbmcnLFxuICAgIGRlbGl2ZXJ5U3RhdHVzX1JFQURZX0ZPUl9QSUNLVVA6ICdSZWFkeSBmb3IgcGlja3VwJyxcbiAgICBkZWxpdmVyeVN0YXR1c19QSUNLVVBfQ09NUExFVEU6ICdQaWNrZWQgdXAnLFxuICAgIGRlbGl2ZXJ5U3RhdHVzX1NISVBQRUQ6ICdTaGlwcGVkJyxcbiAgICBkZWxpdmVyeVN0YXR1c19DQU5DRUxMRUQ6ICdDYW5jZWxsZWQnLFxuICAgIHN0YXR1c0Rpc3BsYXlfY2FuY2VsbGVkOiAnQ2FuY2VsbGVkJyxcbiAgICBzdGF0dXNEaXNwbGF5X2NhbmNlbGxpbmc6ICdDYW5jZWwgUGVuZGluZycsXG4gICAgc3RhdHVzRGlzcGxheV9jb21wbGV0ZWQ6ICdDb21wbGV0ZWQnLFxuICAgIHN0YXR1c0Rpc3BsYXlfY3JlYXRlZDogJ0NyZWF0ZWQnLFxuICAgIHN0YXR1c0Rpc3BsYXlfZXJyb3I6ICdQZW5kaW5nJyxcbiAgICBzdGF0dXNEaXNwbGF5X0Vycm9yOiAnUGVuZGluZycsXG4gICAgc3RhdHVzRGlzcGxheV9vcGVuOiAnT3BlbicsXG4gICAgc3RhdHVzRGlzcGxheV9wcm9jZXNzaW5nOiAnSW4gUHJvY2VzcycsXG4gICAgY29uc2lnbm1lbnRUcmFja2luZzoge1xuICAgICAgYWN0aW9uOiAnVHJhY2sgcGFja2FnZScsXG4gICAgICBkaWFsb2c6IHtcbiAgICAgICAgaGVhZGVyOiAnVHJhY2tpbmcgSW5mb3JtYXRpb24nLFxuICAgICAgICBzaGlwcGVkOiAnU2hpcHBlZCcsXG4gICAgICAgIGVzdGltYXRlOiAnRXN0aW1hdGVkIERlbGl2ZXJ5JyxcbiAgICAgICAgY2FycmllcjogJ0RlbGl2ZXJ5IFNlcnZpY2UnLFxuICAgICAgICB0cmFja2luZ0lkOiAnVHJhY2tpbmcgTnVtYmVyJyxcbiAgICAgICAgbm9UcmFja2luZzpcbiAgICAgICAgICAnVGhlIHBhY2thZ2UgaGFzIG5vdCBiZWVuIGRpc3BhdGNoZWQgZnJvbSB0aGUgd2FyZWhvdXNlLiAnICtcbiAgICAgICAgICAnVGhlIHRyYWNraW5nIGluZm9ybWF0aW9uIHdpbGwgYmUgYXZhaWxhYmxlIGFmdGVyIHRoZSBwYWNrYWdlIGlzIHNoaXBwZWQuJyxcbiAgICAgICAgbG9hZGluZ0hlYWRlcjogJ0NvbnNpZ25tZW50IFRyYWNraW5nJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjYW5jZWxsYXRpb25BbmRSZXR1cm46IHtcbiAgICAgIHJldHVybkFjdGlvbjogJ1JlcXVlc3QgYSBSZXR1cm4nLFxuICAgICAgY2FuY2VsQWN0aW9uOiAnQ2FuY2VsIEl0ZW1zJyxcbiAgICAgIGl0ZW06ICdJdGVtJyxcbiAgICAgIGl0ZW1QcmljZTogJ0l0ZW0gUHJpY2UnLFxuICAgICAgcXVhbnRpdHk6ICdNYXggUXVhbnRpdHknLFxuICAgICAgcmV0dXJuUXR5OiAnUXVhbnRpdHkgdG8gUmV0dXJuJyxcbiAgICAgIGNhbmNlbFF0eTogJ1F1YW50aXR5IHRvIENhbmNlbCcsXG4gICAgICBzZXRBbGw6ICdTZXQgYWxsIHF1YW50aXRpZXMgdG8gbWF4aW11bScsXG4gICAgICB0b3RhbFByaWNlOiAnVG90YWwnLFxuICAgICAgc3VibWl0OiAnU3VibWl0IFJlcXVlc3QnLFxuICAgICAgcmV0dXJuU3VjY2VzczogJ1lvdXIgcmV0dXJuIHJlcXVlc3QgKHt7cm1hfX0pIHdhcyBzdWJtaXR0ZWQnLFxuICAgICAgY2FuY2VsU3VjY2VzczpcbiAgICAgICAgJ1lvdXIgY2FuY2VsbGF0aW9uIHJlcXVlc3Qgd2FzIHN1Ym1pdHRlZCAob3JpZ2luYWwgb3JkZXIge3tvcmRlckNvZGV9fSB3aWxsIGJlIHVwZGF0ZWQpJyxcbiAgICB9LFxuICB9LFxuICBvcmRlckhpc3Rvcnk6IHtcbiAgICBvcmRlckhpc3Rvcnk6ICdPcmRlciBoaXN0b3J5JyxcbiAgICBvcmRlcklkOiAnT3JkZXIgIycsXG4gICAgZGF0ZTogJ0RhdGUnLFxuICAgIHN0YXR1czogJ1N0YXR1cycsXG4gICAgdG90YWw6ICdUb3RhbCcsXG4gICAgbm9PcmRlcnM6ICdXZSBoYXZlIG5vIG9yZGVyIHJlY29yZHMgZm9yIHRoaXMgYWNjb3VudC4nLFxuICAgIHN0YXJ0U2hvcHBpbmc6ICdTdGFydCBTaG9wcGluZycsXG4gICAgc29ydEJ5TW9zdFJlY2VudDogJ1NvcnQgYnkgTW9zdCByZWNlbnQnLFxuICB9LFxuICBjbG9zZUFjY291bnQ6IHtcbiAgICBjb25maXJtQWNjb3VudENsb3N1cmU6ICdDb25maXJtIEFjY291bnQgQ2xvc3VyZScsXG4gICAgY29uZmlybUFjY291bnRDbG9zdXJlTWVzc2FnZTpcbiAgICAgICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2xvc2UgeW91ciBhY2NvdW50PycsXG4gICAgY2xvc2VNeUFjY291bnQ6ICdDTE9TRSBNWSBBQ0NPVU5UJyxcbiAgICBhY2NvdW50Q2xvc2VkU3VjY2Vzc2Z1bGx5OiAnQWNjb3VudCBjbG9zZWQgd2l0aCBzdWNjZXNzJyxcbiAgICBhY2NvdW50Q2xvc2VkRmFpbHVyZTogJ0ZhaWxlZCB0byBjbG9zZSBhY2NvdW50JyxcbiAgfSxcbiAgdXBkYXRlRW1haWxGb3JtOiB7XG4gICAgbmV3RW1haWxBZGRyZXNzOiB7XG4gICAgICBsYWJlbDogJ05ldyBlbWFpbCBhZGRyZXNzJyxcbiAgICAgIHBsYWNlaG9sZGVyOiAnRW50ZXIgZW1haWwnLFxuICAgIH0sXG4gICAgY29uZmlybU5ld0VtYWlsQWRkcmVzczoge1xuICAgICAgbGFiZWw6ICdDb25maXJtIG5ldyBlbWFpbCBhZGRyZXNzJyxcbiAgICAgIHBsYWNlaG9sZGVyOiAnRW50ZXIgZW1haWwnLFxuICAgIH0sXG4gICAgZW50ZXJWYWxpZEVtYWlsOiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwuJyxcbiAgICBib3RoRW1haWxNdXN0TWF0Y2g6ICdCb3RoIGVtYWlscyBtdXN0IG1hdGNoJyxcbiAgICBwYXNzd29yZDoge1xuICAgICAgbGFiZWw6ICdQYXNzd29yZCcsXG4gICAgICBwbGFjZWhvbGRlcjogJ0VudGVyIHBhc3N3b3JkJyxcbiAgICB9LFxuICAgIHBsZWFzZUlucHV0UGFzc3dvcmQ6ICdQbGVhc2UgaW5wdXQgcGFzc3dvcmQnLFxuICAgIGVtYWlsVXBkYXRlU3VjY2VzczogJ1N1Y2Nlc3MuIFBsZWFzZSBzaWduIGluIHdpdGgge3sgbmV3VWlkIH19JyxcbiAgfSxcbiAgdXBkYXRlUGFzc3dvcmRGb3JtOiB7XG4gICAgb2xkUGFzc3dvcmQ6IHtcbiAgICAgIGxhYmVsOiAnT2xkIFBhc3N3b3JkJyxcbiAgICAgIHBsYWNlaG9sZGVyOiAnT2xkIFBhc3N3b3JkJyxcbiAgICB9LFxuICAgIG9sZFBhc3N3b3JkSXNSZXF1aXJlZDogJ09sZCBwYXNzd29yZCBpcyByZXF1aXJlZC4nLFxuICAgIG5ld1Bhc3N3b3JkOiB7XG4gICAgICBsYWJlbDogJ05ldyBQYXNzd29yZCcsXG4gICAgICBwbGFjZWhvbGRlcjogJ05ldyBQYXNzd29yZCcsXG4gICAgfSxcbiAgICBwYXNzd29yZE1pblJlcXVpcmVtZW50czpcbiAgICAgICdQYXNzd29yZCBtdXN0IGJlIHNpeCBjaGFyYWN0ZXJzIG1pbmltdW0sIHdpdGggb25lIHVwcGVyY2FzZSBsZXR0ZXIsIG9uZSBudW1iZXIsIG9uZSBzeW1ib2wnLFxuICAgIGNvbmZpcm1QYXNzd29yZDoge1xuICAgICAgbGFiZWw6ICdDb25maXJtIE5ldyBQYXNzd29yZCcsXG4gICAgICBwbGFjZWhvbGRlcjogJ0NvbmZpcm0gUGFzc3dvcmQnLFxuICAgIH0sXG4gICAgYm90aFBhc3N3b3JkTXVzdE1hdGNoOiAnQm90aCBwYXNzd29yZCBtdXN0IG1hdGNoJyxcbiAgICBwYXNzd29yZFVwZGF0ZVN1Y2Nlc3M6ICdQYXNzd29yZCB1cGRhdGVkIHdpdGggc3VjY2VzcycsXG4gIH0sXG4gIHVwZGF0ZVByb2ZpbGVGb3JtOiB7XG4gICAgdGl0bGU6ICcnLFxuICAgIG5vbmU6ICcnLFxuICAgIGZpcnN0TmFtZToge1xuICAgICAgbGFiZWw6ICdGaXJzdCBuYW1lJyxcbiAgICAgIHBsYWNlaG9sZGVyOiAnRmlyc3QgbmFtZScsXG4gICAgfSxcbiAgICBmaXJzdE5hbWVJc1JlcXVpcmVkOiAnRmlyc3QgbmFtZSBpcyByZXF1aXJlZC4nLFxuICAgIGxhc3ROYW1lOiB7XG4gICAgICBsYWJlbDogJ0xhc3QgbmFtZScsXG4gICAgICBwbGFjZWhvbGRlcjogJ0xhc3QgbmFtZScsXG4gICAgfSxcbiAgICBsYXN0TmFtZUlzUmVxdWlyZWQ6ICdMYXN0IG5hbWUgaXMgcmVxdWlyZWQuJyxcbiAgICBwcm9maWxlVXBkYXRlU3VjY2VzczogJ1BlcnNvbmFsIGRldGFpbHMgc3VjY2Vzc2Z1bGx5IHVwZGF0ZWQnLFxuICB9LFxuICBjb25zZW50TWFuYWdlbWVudEZvcm06IHtcbiAgICBjbGVhckFsbDogJ0NsZWFyIGFsbCcsXG4gICAgc2VsZWN0QWxsOiAnU2VsZWN0IGFsbCcsXG4gICAgbWVzc2FnZToge1xuICAgICAgc3VjY2Vzczoge1xuICAgICAgICBnaXZlbjogJ0NvbnNlbnQgc3VjY2Vzc2Z1bGx5IGdpdmVuLicsXG4gICAgICAgIHdpdGhkcmF3bjogJ0NvbnNlbnQgc3VjY2Vzc2Z1bGx5IHdpdGhkcmF3bi4nLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBteUNvdXBvbnM6IHtcbiAgICBub0NvdXBvbnNNZXNzYWdlOiAnWW91IGhhdmUgbm8gY291cG9ucyBhdmFpbGFibGUuJyxcbiAgICBlZmZlY3RpdmVUaXRsZTogJ0VmZmVjdGl2ZTonLFxuICAgIEVmZmVjdGl2ZTogJ0VGRkVDVElWRScsXG4gICAgUHJlU2Vzc2lvbjogJ0VGRkVDVElWRSBTT09OJyxcbiAgICBFeHBpcmVTb29uOiAnRVhQSVJJTkcgU09PTicsXG4gICAgcmVhZE1vcmU6ICdSZWFkIG1vcmUnLFxuICAgIG5vdGlmaWNhdGlvbjogJ05vdGlmaWNhdGlvbicsXG4gICAgZmluZFByb2R1Y3RzOiAnRmluZCBQcm9kdWN0cycsXG4gICAgc3RhdHVzOiAnU3RhdHVzOicsXG4gICAgZGlhbG9nVGl0bGU6ICdDb3Vwb24nLFxuICAgIGNsYWltQ3VzdG9tZXJDb3Vwb246ICdZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgY2xhaW1lZCB0aGlzIGNvdXBvbi4nLFxuICAgIG15Q291cG9uczogJ015IGNvdXBvbnMnLFxuICAgIHN0YXJ0RGF0ZUFzYzogJ1N0YXJ0IERhdGUgKGFzY2VuZGluZyknLFxuICAgIHN0YXJ0RGF0ZURlc2M6ICdTdGFydCBEYXRlIChkZXNjZW5kaW5nKScsXG4gICAgZW5kRGF0ZUFzYzogJ0VuZCBEYXRlIChhc2NlbmRpbmcpJyxcbiAgICBlbmREYXRlRGVzYzogJ0VuZCBEYXRlIChkZXNjZW5kaW5nKScsXG4gICAgc29ydEJ5TW9zdFJlY2VudDogJ1NvcnQgYnkgTW9zdCByZWNlbnQnLFxuICAgIG5vdGVzUHJlZmZpeDpcbiAgICAgICdZb3UgY2FuIHNldCB5b3VyIHByZWZlcnJlZCBjaGFubmVscyBmb3IgcmVjZWl2aW5nIGNvdXBvbiBub3RpZmljYXRpb25zIG9uIHRoZSAnLFxuICAgIG5vdGVzTGluazogJ05vdGlmaWNhdGlvbiBDaGFubmVscycsXG4gICAgbm90ZXNTdWZmaXg6ICcgcGFnZS4nLFxuICB9LFxuICBub3RpZmljYXRpb25QcmVmZXJlbmNlOiB7XG4gICAgbWVzc2FnZTogJ1NlbGVjdCB5b3VyIHByZWZlcnJlZCBub3RpZmljYXRpb24gY2hhbm5lbHMnLFxuICAgIG5vdGU6ICdOb3RlOiAnLFxuICAgIG5vdGVNZXNzYWdlOlxuICAgICAgJ0lmIHlvdSBkZWFjdGl2YXRlIGFsbCBjaGFubmVscyB5b3Ugd2lsbCBub3QgYmUgYWJsZSB0byByZWNlaXZlIGFueSBmdXJ0aGVyIG5vdGlmaWNhdGlvbnMuJyxcbiAgICBFTUFJTDogJ0VtYWlsOicsXG4gICAgU01TOiAnU01TOicsXG4gICAgU0lURV9NRVNTQUdFOiAnU2l0ZU1lc3NhZ2UnLFxuICB9LFxuICBteUludGVyZXN0czoge1xuICAgIGhlYWRlcjogJ015IEludGVyZXN0cycsXG4gICAgaXRlbTogJ0lURU0nLFxuICAgIHByaWNlOiAnUFJJQ0UnLFxuICAgIG5vdGlmaWNhdGlvbnM6ICdOT1RJRklDQVRJT05TJyxcbiAgICBub0ludGVyZXN0czogJ1lvdSBoYXZlIG5vIHJlZ2lzdGVyZWQgaW50ZXJlc3RzIHlldC4nLFxuICAgIGluU3RvY2s6ICdJbiBTdG9jaycsXG4gICAgbG93U3RvY2s6ICdMb3cgU3RvY2snLFxuICAgIG91dE9mU3RvY2s6ICdPdXQgb2YgU3RvY2snLFxuICAgIEJBQ0tfSU5fU1RPQ0s6ICdCYWNrIEluIFN0b2NrJyxcbiAgICBzb3J0QnlNb3N0UmVjZW50OiAnU29ydCBieSBNb3N0IHJlY2VudCcsXG4gICAgZXhwaXJhdGlvbkRhdGU6ICcgLSBUaWxsIHt7IGV4cGlyYXRpb25EYXRlIH19JyxcbiAgICBwcm9kdWN0SWQ6ICdJRCB7eyBjb2RlIH19JyxcbiAgICByZW1vdmU6ICdSRU1PVkUnLFxuICAgIHNvcnRpbmc6IHtcbiAgICAgIGJ5TmFtZUFzYzogJ05hbWUgKGFzY2VuZGluZyknLFxuICAgICAgYnlOYW1lRGVzYzogJ05hbWUgKGRlc2NlbmRpbmcpJyxcbiAgICB9LFxuICB9LFxuICBBY2NvdW50T3JkZXJIaXN0b3J5VGFiQ29udGFpbmVyOiB7XG4gICAgdGFiczoge1xuICAgICAgQWNjb3VudE9yZGVySGlzdG9yeUNvbXBvbmVudDogJ0FMTCBPUkRFUlMgKHt7cGFyYW19fSknLFxuICAgICAgT3JkZXJSZXR1cm5SZXF1ZXN0TGlzdENvbXBvbmVudDogJ1JFVFVSTlMgKHt7cGFyYW19fSknLFxuICAgIH0sXG4gIH0sXG4gIHJldHVyblJlcXVlc3RMaXN0OiB7XG4gICAgcmV0dXJuUmVxdWVzdElkOiAnUmV0dXJuICMnLFxuICAgIG9yZGVySWQ6ICdPcmRlciAjJyxcbiAgICBkYXRlOiAnRGF0ZSBDcmVhdGVkJyxcbiAgICBzdGF0dXM6ICdTdGF0dXMnLFxuICAgIHNvcnRCeU1vc3RSZWNlbnQ6ICdTb3J0IGJ5IE1vc3QgcmVjZW50JyxcbiAgICBzdGF0dXNEaXNwbGF5X0FQUFJPVkFMX1BFTkRJTkc6ICdBcHByb3ZhbCBQZW5kaW5nJyxcbiAgICBzdGF0dXNEaXNwbGF5X0NBTkNFTEVEOiAnQ2FuY2VsbGVkJyxcbiAgICBzdGF0dXNEaXNwbGF5X0NBTkNFTExJTkc6ICdDYW5jZWxsaW5nJyxcbiAgICBzdGF0dXNEaXNwbGF5X1dBSVQ6ICdXYWl0JyxcbiAgICBzdGF0dXNEaXNwbGF5X1JFQ0VJVkVEOiAnUmVjZWl2ZWQnLFxuICAgIHN0YXR1c0Rpc3BsYXlfUkVDRUlWSU5HOiAnUmVjZWl2aW5nJyxcbiAgICBzdGF0dXNEaXNwbGF5X0FQUFJPVklORzogJ0FwcHJvdmluZycsXG4gICAgc3RhdHVzRGlzcGxheV9SRVZFUlNJTkdfUEFZTUVOVDogJ1JldmVyc2luZyBQYXltZW50JyxcbiAgICBzdGF0dXNEaXNwbGF5X1BBWU1FTlRfUkVWRVJTRUQ6ICdQYXltZW50IFJldmVyc2VkJyxcbiAgICBzdGF0dXNEaXNwbGF5X1BBWU1FTlRfUkVWRVJTQUxfRkFJTEVEOiAnUGF5bWVudCBSZXZlcnNhbCBGYWlsZWQnLFxuICAgIHN0YXR1c0Rpc3BsYXlfUkVWRVJTSU5HX1RBWDogJ1JldmVyc2luZyBUYXgnLFxuICAgIHN0YXR1c0Rpc3BsYXlfVEFYX1JFVkVSU0VEOiAnVGF4IFJldmVyc2VkJyxcbiAgICBzdGF0dXNEaXNwbGF5X1RBWF9SRVZFUlNBTF9GQUlMRUQ6ICdUYXggUmV2ZXJzYWwgRmFpbGVkJyxcbiAgICBzdGF0dXNEaXNwbGF5X0NPTVBMRVRFRDogJ0NvbXBsZXRlZCcsXG4gIH0sXG4gIHJldHVyblJlcXVlc3Q6IHtcbiAgICByZXR1cm5SZXF1ZXN0SWQ6ICdSZXR1cm4gUmVxdWVzdCAjJyxcbiAgICBvcmRlckNvZGU6ICdGb3IgT3JkZXIgIycsXG4gICAgc3RhdHVzOiAnUmV0dXJuIHN0YXR1cycsXG4gICAgY2FuY2VsOiAnQ2FuY2VsIFJldHVybiBSZXF1ZXN0JyxcbiAgICBpdGVtOiAnRGVzY3JpcHRpb24nLFxuICAgIGl0ZW1QcmljZTogJ0l0ZW0gUHJpY2UnLFxuICAgIHJldHVyblF0eTogJ1JldHVybiBRdWFudGl0eScsXG4gICAgdG90YWw6ICdUb3RhbCcsXG4gICAgc3VtbWFyeTogJ1JldHVybiBUb3RhbHMnLFxuICAgIHN1YnRvdGFsOiAnU3VidG90YWwnLFxuICAgIGRlbGl2ZXJ5Q29kZTogJ0RlbGl2ZXJ5IGNvc3QnLFxuICAgIGVzdGltYXRlZFJlZnVuZDogJ0VzdGltYXRlZCByZWZ1bmQnLFxuICAgIG5vdGU6XG4gICAgICAnVGhlIHRvdGFscyBhcmUgZXN0aW1hdGVkIGFuZCBtYXkgbm90IGluY2x1ZGUgYXBwbGljYWJsZSB0YXhlcyBvciBvdGhlciBjaGFyZ2VzLicsXG4gICAgY2FuY2VsU3VjY2VzczogJ1lvdXIgcmV0dXJuIHJlcXVlc3QgKHt7cm1hfX0pIHdhcyBjYW5jZWxsZWQnLFxuICB9LFxuICB3aXNobGlzdDoge1xuICAgIGVtcHR5OiAnTm8gcHJvZHVjdHMgaW4geW91ciB3aXNoIGxpc3QgeWV0JyxcbiAgfSxcbn07XG4iXX0=