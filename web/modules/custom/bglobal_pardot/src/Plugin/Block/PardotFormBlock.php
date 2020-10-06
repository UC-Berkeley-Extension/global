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
    $build = [
      '#theme' => 'bglobal_pardot_form',
      '#action_url' => 'https://go.pardot.com/l/102272/2016-11-04/2klckm',
      '#success_message' => 'Success!',
      '#submit_label' => 'Act Now!',
      '#fields' => [
        'firstname' => [
          'label' => 'First Name',
          'type' => 'text',
          'required' => TRUE,
        ],
        'lastname' => [
          'label' => 'Last Name',
          'type' => 'text',
          'required' => TRUE,
        ],
        'email' => [
          'label' => 'Email',
          'type' => 'text',
          'required' => TRUE,
        ],
        'status' => [
          'label' => 'Status',
          'type' => 'select',
          'options' => ['Student', 'Professional'],
          'default_value' => 'Professional',
        ],
        'question' => [
          'label' => 'Question',
          'type' => 'textarea',
          'rows' => '5',
          'cols' => '20',
          'required' => FALSE,
        ],
        'opt_in_contact' => [
          'label' => 'Contact List',
          'type' => 'checkbox',
          'description' => 'Join our mailing list.',
          'required' => FALSE,
        ],
        'success_location' => [
          'type' => 'hidden',
          'default_value' => 'https://extension.berkeley.edu/international/',
        ],
        'error_location' => [
          'type' => 'hidden',
          'default_value' => 'https://extension.berkeley.edu/international/',
        ],
      ],
      '#tracking' => [
        'page_title',
        #'program_name',
        'full_path',
      ],
    ];
    $build['#attached']['library'][] = 'bglobal_pardot/drupal.bglobal_pardot';

    return $build;
  }

  /**
   * {@inheritdoc}
   */
  public function getCacheContexts() {
    // By default, all form blocks are per-url.
    return ['url'];
  }

}
