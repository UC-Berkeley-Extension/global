<?php

namespace Drupal\bglobal_pardot\Plugin\Block;

use Drupal\Core\Access\AccessResult;
use Drupal\Core\Block\BlockBase;
use Drupal\Core\Session\AccountInterface;

/**
 * Build a Pardot form within a Drupal block.
 *
 * @Block(
 *   id = "bglobal_pardot_block",
 *   admin_label = @Translation("Custom Pardot form")
 * )
 */
class PardotFormBlock extends BlockBase {

  /**
   * Overrides \Drupal\block\BlockPluginTrait::access().
   */
  public function access(AccountInterface $account, $return_as_object = FALSE) {
    $access = AccessResult::allowedIfHasPermission($account, 'access content');
    return $return_as_object ? $access : $access->isAllowed();
  }

  /**
   * Build the output.
   */
  public function build() {
    $items = ['foo', 'bar'];
    return [
      '#theme' => 'item_list',
      '#items' => $items,
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function getCacheContexts() {
    // By default, all form blocks are per-url.
    return ['url'];
  }

}
