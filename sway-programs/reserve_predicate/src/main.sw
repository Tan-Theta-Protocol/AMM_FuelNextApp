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

use std::array_conversions::{b256::*};


configurable {
    /// The asset1 to be paid.
    TTD: AssetId = AssetId::from(0x0101010101010101010101010101010101010101010101010101010101010101),
    /// The asset1 to be paid.
    ASSET1: AssetId = AssetId::from(0x0101010101010101010101010101010101010101010101010101010101010101),
    /// The asset1 to be paid.
    ASSET2: AssetId = AssetId::from(0x0101010101010101010101010101010101010101010101010101010101010101),
}

fn main() -> bool {
    // Otherwise, evaluate the terms of the order:
    // The output which pays the receiver must be the first output
    let input_index = 0;

    // Revert if output is not an Output::Coin
    match input_type(input_index) {
        Input::Coin => (),
        _ => return false,
    };

    // Since output is known to be a Coin, the following are always valid
    let in_asset = match input_asset_id(input_index) {
        Some(address) => address,
        None => return false,
    };

    let in_amount = input_amount(input_index);

    let mut output_index = 0;

    // Revert if output is not an Output::Coin
    match output_type(output_index) {
        Output::Coin => (),
        _ => return false,
    };

    // Since output is known to be a Coin, the following are always valid
    let out_asset1 = match output_asset_id(output_index) {
        Some(address) => address,
        None => return false,
    };

    let out_amount1 = output_amount(output_index);

    output_index += 1;

    // Revert if output is not an Output::Coin
    match output_type(output_index) {
        Output::Coin => (),
        _ => return false,
    };

    // Since output is known to be a Coin, the following are always valid
    let out_asset2 = match output_asset_id(output_index) {
        Some(address) => address,
        None => return false,
    };

    let out_amount2 = output_amount(output_index);

    // Evaluate the predicate
    // todo: do we need to take amount as input
    // (call_asset == TTD) && (call_amount.unwrap() == amount1) && (call_amount.unwrap() == amount2)
    (in_asset == TTD) && (in_amount.unwrap() == out_amount1) && (in_amount.unwrap() == out_amount2) && (out_asset1 == ASSET1) && (out_asset2 == ASSET2)
    // true
}
