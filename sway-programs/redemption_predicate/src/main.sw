predicate;

use std::{
    inputs::{
        Input,
        input_amount,
        input_asset_id,
        input_coin_owner,
        input_count,
        input_type,
    },
    outputs::{
        Output,
        output_amount,
        output_asset_id,
        output_asset_to,
        output_pointer,
        output_type,
    },
};

configurable {
    /// The asset1 to be paid.
    TTD: AssetId = AssetId::from(0x0101010101010101010101010101010101010101010101010101010101010101),
    ASSET: AssetId = AssetId::from(0x0101010101010101010101010101010101010101010101010101010101010101),
}

fn main() -> bool {
    let input_index = 0; 
    // Since output is known to be a Coin, the following are always valid
    let in_asset = match input_asset_id(input_index) {
        Some(address) => address,
        None => return false,
    };

    let in_amount = input_amount(input_index).unwrap();

    let output_index = 0;    
    // Since output is known to be a Coin, the following are always valid
    let out_asset = match output_asset_id(output_index) {
        Some(address) => address,
        None => return false,
    };

    let out_amount = output_amount(output_index);

    (in_asset == ASSET) && (out_asset == TTD) && (in_amount == out_amount)
    // true
}
