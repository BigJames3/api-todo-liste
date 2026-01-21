terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 4.0"
    }
  }
}
####################################
# PROVIDER
####################################
provider "azurerm" {
  features {}

  subscription_id = "d050b6a9-a16a-4412-aa8b-e8e443306d3f"
}

####################################
# RESOURCE GROUP (EXISTANT)
####################################
resource "azurerm_resource_group" "rg" {
  name     = "FormationResource"
  location = "indonesiacentral"
}

####################################
# NETWORK INTERFACE (EXISTANTE)
####################################
resource "azurerm_network_interface" "nic" {
  name                = "test-ubuntu-cus-vm167"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name

  ip_configuration {
    name                          = "internal"
    private_ip_address_allocation = "Dynamic"
  }
}

####################################
# LINUX VIRTUAL MACHINE (EXISTANTE)
####################################
resource "azurerm_linux_virtual_machine" "vm" {
  name                = "test-ubuntu-cus-vm"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location

  size           = "Standard_D2s_v3"
  admin_username = "azureuser"

  network_interface_ids = [
    azurerm_network_interface.nic.id
  ]

  disable_password_authentication = true

  os_disk {
    name                 = "test-ubuntu-cus-vm_OsDisk_1"
    caching              = "ReadWrite"
    storage_account_type = "Standard_LRS"
  }

  source_image_reference {
    publisher = "canonical"
    offer     = "ubuntu-24_04-lts"
    sku       = "server"
    version   = "latest"
  }
}
