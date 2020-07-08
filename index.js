/* eslint-disable no-undef */
'use strict';

$(function () {
  $('#js-shopping-list-form').submit(event =>{
    event.preventDefault();
    const listItem = $(event.currentTarget).find('#shopping-list-entry').val();
    $('ul').append(
      `<li>
        <span class="shopping-item">${listItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`);
  });
  $('ul').on('click', '.shopping-item-toggle', event =>{
    $(event.currentTarget).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
  $('ul').on('click', '.shopping-item-delete', event =>{
    $(event.currentTarget).closest('li').remove();
  });
});
