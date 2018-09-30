const User = artifacts.require('User');
const UserV2 = artifacts.require('UserV2');
const Storage = artifacts.require('Storage')
const ProxyContract = artifacts.require('Proxy')

contract('UserContract', accounts => {
  var proxy, user, userV2

  beforeEach(async () => {
    proxy = await ProxyContract.deployed()
    user = await User.deployed()
    userV2 = await UserV2.deployed()
  });

  it('register user', async () => {
    // await proxy.upgradeTo(user.address)
    // proxy = _.extend(proxy, User.at(proxy.address))

    // // const tx = await proxy.register("20scoops")
    // // assert.ok(tx)

    // // Upgrade to the latest delegate version 2
    await proxy.upgradeTo(userV2.address)
    proxy = UserV2.at(proxy.address)
    let countUser = await proxy.getCountUser()
    console.log(countUser)
  });
});