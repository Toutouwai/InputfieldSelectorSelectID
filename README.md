# Inputfield Selector Select ID

A module for ProcessWire CMS/CMF. Uses the Page List Select inputfield for user-friendly input of page IDs into Inputfield Selector.

## Overview

This module adds a feature to Inputfield Selector, which is most commonly seen in Lister (Find) and Lister Pro.

When adding a filter row for "Parent", "Has parent/ancestor" or "ID" the user is expected to enter a page ID to match against. But this is not as user-friendly as it could be because the user may be able to identify the desired page by its title or location in the tree but not know its ID. This is particularly the case for site editors who may not even understand the concept of a page ID.

So this module adds a thunderbolt icon to relevant rows in Inputfield Selector. When the icon is clicked a Page List Select inputfield opens in a modal window, allowing the user to visually select a page from the tree. When the modal is closed with "OK" the ID of the selected page is inserted into the filter row.

![select-id](https://user-images.githubusercontent.com/1538852/73600047-0e052400-45b0-11ea-889c-be60968055e1.gif)

### Tip

After a page selection has been made in the modal window the "OK" button will automatically receive focus so if you prefer you can close the modal by hitting the Enter key rather than mousing to the OK button.

## Installation

[Install](http://modules.processwire.com/install-uninstall/) the Inputfield Selector Select ID module.