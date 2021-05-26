LoadCheckoutPaymentContext(function(Checkout, PaymentOptions) {
  
  var currentTotalPrice = Checkout.getData('order.cart.prices.total');
	var currencCardBin = null;

	// Some helper functions.

	// Get credit the card number from transparent form.
	var getCardNumber = function() {
		return Checkout.getData('form.cardNumber');
	};

	// Get the first 6 digits from the credit card number.
	var getCardNumberBin = function() {
		return getCardNumber().substring(0, 6);
	};

	// Check whether the BIN (first 6 digits of the credit card number) has changed. If so, we intend to update the available installments.
	var mustRefreshInstallments = function() {
		var cardBin = getCardNumberBin();
		var hasCardBin = cardBin && cardBin.length >= 6;
		var hasPrice = Boolean(Checkout.getData('totalPrice'));
		var changedCardBin = cardBin !== currencCardBin;
		var changedPrice = Checkout.getData('totalPrice') !== currentTotalPrice;
		return (hasCardBin && hasPrice) && (changedCardBin || changedPrice);
	};

	// Update the list of installments available to the consumer.
	var refreshInstallments = function() {
		// Let's imagine the App provides this endpoint to obtain installments.
    //account. 

  
    var maxInstal=	Math.floor(Checkout.getData('totalPrice')/ 30);
    installments = []
   
       for(i = 1; i<=maxInstal; i++){
   
           inst = {
               quantity: i,
               installmentAmount: Checkout.getData('totalPrice')/i,
               totalAmount: Checkout.getData('totalPrice'),
               cft: '0,00%'
             }
   
               installments.push(inst)
   
       }
   



			Checkout.setInstallments(installments);


	};
    
    var AcmeTransparentCardPaymentOption = new PaymentOptions.Transparent.CardPayment({
        
      id: "mypayments_transparent_card", // Same `id` as in the REST API checkout payment option.
      
      // We indicate which extra fields we want to render in the form.
      fields: {
        card_holder_id_number: true
      },
      
      // `onLoad` handler is common to all `PaymentOtpions`. 
      onLoad: function() {
        // Do something after the script loads.
      },
      
      // `onDataChange` handler is specific to `Transparent.CardPayment` option.
      onDataChange: Checkout.utils.throttle(function() {
        if (mustRefreshInstallments()) {
          refreshInstallments();
        } else if (!getCardNumberBin()) {
          // Clear installments if customer remove credit card number.
          Checkout.setInstallments(null);
        }
      }),
      onSubmit: function(callback) {
        callback({
            success: true, // Or false.
        });
    },
      
      // More handlers...
    });
    var AcmeTransparentPixPaymentOption = new PaymentOptions.Transparent.PixPayment({
        id: "mypayments_transparent_pix", // Same `id` as in the REST API checkout payment option.
        
        // We indicate which extra fields we want to render in the form.
        fields: {
            holderName: true, 
            holderIdNumber: true
        },
        
        // `onLoad` handler is common to all `PaymentOtpions`. 
        onLoad: function() {
          // Do something after the script loads.
        },
        
        // `onDataChange` handler is specific to `Transparent.CardPayment` option.
        onDataChange: Checkout.utils.throttle(function() {
          // It can be used to, for example, read the card data, perform validations, refresh the installments data, etc.
        }, 700),
        
      
        onSubmit: function(callback) {
            callback({
                success: true, // Or false.
            });
        },
        
        // More handlers...
      });
      
    
    Checkout.addPaymentOption(AcmeTransparentCardPaymentOption);
    Checkout.addPaymentOption(AcmeTransparentPixPaymentOption);
    
  });