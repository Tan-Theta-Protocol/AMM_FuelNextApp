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
    /// The asset1 to be paid.
    ASSET1: AssetId = AssetId::from(0x0101010101010101010101010101010101010101010101010101010101010101),
    /// The asset1 to be paid.
    ASSET2: AssetId = AssetId::from(0x0101010101010101010101010101010101010101010101010101010101010101),

}

fn main(sub_id1: b256, sub_id2: b256, contract_id: ContractId) -> bool {
    // todo: for place sell/buy
    let mut input_index = 0;
    // Revert if output is not an Output::Coin
    match input_type(input_index) {
        Input::Coin => (),
        _ => return false,
    };

    // Since output is known to be a Coin, the following are always valid
    let in_asset1 = match input_asset_id(input_index) {
        Some(address) => address,
        None => return false,
    };

    let in_amount1 = input_amount(input_index).unwrap();

    input_index += 1;
    // Since output is known to be a Coin, the following are always valid
    let in_asset2 = match input_asset_id(input_index) {
        Some(address) => address,
        None => return false,
    };

    let in_amount2 = input_amount(input_index).unwrap();

    let output_index = 0;
    // Since output is known to be a Coin, the following are always valid
    let out_asset = match output_asset_id(output_index) {
        Some(address) => address,
        None => return false,
    };

    let out_amount = output_amount(output_index);

    // todo: for order match
    // Revert if output is not an Output::Coin
    match input_type(input_index) {
        Input::Coin => (),
        _ => return false,
    };

    let mut input_index = 0;
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

    // todo: first buy/sell, second: order match
    // (out_asset == TTD) && (in_asset1 == ASSET1) && (in_asset2 == ASSET2) && (in_amount1 == out_amount) && (in_amount2 == out_amount) || (in_asset == ASSET1) && (out_asset == ASSET2) && (in_amount == out_amount)
    (out_asset == TTD) && (in_asset1 == ASSET1) && (in_asset2 == ASSET2) && (in_amount1 == out_amount) && (in_amount2 == out_amount)
    // true
}
