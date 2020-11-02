<?php

namespace Drupal\bglobal_layouts\Plugin\Layout;

use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Render\Markup;
use Drupal\layout_builder\Plugin\Layout\TwoColumnLayout;

/**
 * Configurable two column layout plugin class.
 *
 * @internal
 *   Plugin classes are internal.
 */
class BGTwoColumnLayout extends TwoColumnLayout {

  public function build(array $regions) {
    $build = parent::build($regions);
    $build['#attributes']['class'][] = 'title-layout';
    $title = $this->getConfiguration()['title'] ?? '';
    if ($title) {
      $build['title'] = [
        '#markup' => Markup::create($title),
      ];
    }
    return $build;
  }

  public function buildConfigurationForm(array $form, FormStateInterface $form_state) {
    $form['title'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Section Title'),
      '#description' => $this->t('This is an optional title that will display when the section is rendered.'),
      '#default_value' => $this->getConfiguration()['title'] ?? '',
    ];
    return parent::buildConfigurationForm($form, $form_state);
  }

  public function submitConfigurationForm(array &$form, FormStateInterface $form_state) {
    parent::submitConfigurationForm($form, $form_state);
    $this->configuration['title'] = $form_state->getValue('title');
  }

}
